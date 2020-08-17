import React, { useContext, useState, useEffect } from 'react'
import { DataLoginContext, DataSessionContext } from "./SessionContext";
import { Button, Divider, Form, Grid, Segment, Header } from 'semantic-ui-react'
import Axios from 'axios';

const DividerExampleVerticalForm = () => {
    const [dataLogin, setDataLogin] = useContext(DataLoginContext)
    const [dataSession, setDataSession] = useContext(DataSessionContext)
    const [inputDataLogin, setInputDataLogin] = useState({
        username : "",
        password : ""
    })
    const [inputDataRegister, setInputDataRegister] = useState({
        username : "",
        password : "",
        cpassword : ""
    })

    useEffect( () => {
        if (dataLogin === null){
          Axios.get(`https://backendexample.sanbersy.com/api/users`)
          .then(res => {
            setDataLogin(res.data.map(el=>{ return {
                id : el.id,
                created_at : el.created_at,
                updated_at : el.updated_at,
                username : el.username,
                password : el.password,
            }} ))
          })
        }
    }, [dataLogin])

    const handleChange = (event) => {
        let typeOfInput = event.target.name
        switch (typeOfInput){
            case "usernameLogin":{
                setInputDataLogin({...inputDataLogin, username: event.target.value});
                break
            }
            case "passwordLogin":{
                setInputDataLogin({...inputDataLogin, password: event.target.value});
                break
            }
            case "usernameRegister":{
                setInputDataRegister({...inputDataRegister, username: event.target.value});
                break
            }
            case "passwordRegister":{
                setInputDataRegister({...inputDataRegister, password: event.target.value});
                break
            }
            case "cPasswordRegister":{
                setInputDataRegister({...inputDataRegister, cpassword: event.target.value});
                break
            }
            default:{
                break;
            }
        }
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault()
        let username = inputDataLogin.username
        let password = inputDataLogin.password
        dataLogin.forEach(el => {
            if (username === el.username && password === el.password) {
                setDataSession({...dataSession, username : username})
                setDataSession({...dataSession, password : password})
            }
        })
        
    }

    const handleSubmitRegister = (event) =>{
        event.preventDefault()
        let username = inputDataRegister.username
        let password = inputDataRegister.password
        let cpassword = inputDataRegister.cpassword
        if(password === cpassword){
            Axios.post(`https://backendexample.sanbersy.com/api/users`, {
                username : username, 
                password: password 
            })
            .then(res => {
                setDataLogin([...dataLogin, {
                    id : res.data.id, 
                    username : username, 
                    password : password
                }])
            })
            alert("Success!")
        }
    }

    return(
        <Segment placeholder style={{height:'640px'}}>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column style={{padding:'auto auto'}} > 
                    <Header as='h1' textAlign='center'>Login</Header><br/>
                    <Form onSubmit = {handleSubmitLogin}>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                            name = 'usernameLogin'
                            onChange = {handleChange}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            placeholder='Password'
                            type='password'
                            name = 'passwordLogin'
                            onChange = {handleChange}
                        />
                        <Button content='Login' primary />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle' style={{padding:'auto auto'}} >
                    <Header as='h1'textAlign='center'>Register</Header><br/>
                    <Form onSubmit = {handleSubmitRegister}>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                            name = 'usernameRegister'
                            onChange = {handleChange}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            placeholder='Password'
                            type='password'
                            name = 'passwordRegister'
                            onChange = {handleChange}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            type='password'
                            name = 'cPasswordRegister'
                            onChange = {handleChange}
                        />
                        <Button content='Sign Up' primary />
                    </Form>
                </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>
    )
}

export default DividerExampleVerticalForm
