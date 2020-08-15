import React, { useContext, useState } from "react"
import { DataGamesContext, StatusFormGamesContext, IndexOfGamesContext, InputDataGamesContext } from "./GamesContext";
import { Form, Header, Checkbox } from 'semantic-ui-react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const InsertGamesForm = () =>{
    const [dataGames, setDataGames] = useContext(DataGamesContext)
    const [statusFormGames, setStatusFormGames] = useContext(StatusFormGamesContext)
    const [indexOfFormGames, setIndexOfFormGames] = useContext(IndexOfGamesContext)
    const [inputDataGames, setInputDataGames] = useContext(InputDataGamesContext)

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        switch (typeOfInput){
            case "name":{
                setInputDataGames({...inputDataGames, name: event.target.value});
                break
            }
            case "genre":{
                setInputDataGames({...inputDataGames, genre: event.target.value});
                break
            }
            case "release":{
                setInputDataGames({...inputDataGames, release: event.target.value});
                break
            }
            case "platform":{
                setInputDataGames({...inputDataGames, platform: event.target.value});
                break
            }
            case "image_url":{
                setInputDataGames({...inputDataGames, image_url: event.target.value});
                break
            }
            case "singleplayer":{
                if(event.target.value <= 1){
                    event.target.value = 1
                }
                else if(event.target.value >= 0){
                    event.target.value = 0
                }
                setInputDataGames({...inputDataGames, singleplayer : event.target.value});
                break
            }
            case "multiplayer":{
                if(event.target.value <= 1){
                    event.target.value = 1
                }
                else if(event.target.value >= 0){
                    event.target.value = 0
                }
                setInputDataGames({...inputDataGames, multiplayer : event.target.value});
                break
            }
            default:{
                break;
            }
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        let name = inputDataGames.name
        let genre = inputDataGames.genre
        let release = inputDataGames.release
        let singleplayer = inputDataGames.singleplayer
        let multiplayer = inputDataGames.multiplayer
        let platform = inputDataGames.platform
        let image_url = inputDataGames.image_url
        if (statusFormGames === "Insert"){        
            Axios.post(`https://backendexample.sanbersy.com/api/games`, {
                name : name, 
                genre: genre, 
                release: release, 
                singlePlayer : singleplayer, 
                multiplayer : multiplayer,
                platform : platform,
                image_url : image_url
            })
            .then(res => {
                setDataGames([
                  ...dataGames, 
                  { id : res.data.id, 
                    name:name, 
                    genre: genre, 
                    release: release, 
                    singlePlayer : singleplayer, 
                    multiplayer : multiplayer,
                    platform : platform,
                    image_url : image_url
                  }])
            })
        }
        setStatusFormGames("Insert")
        setIndexOfFormGames(-1)
        setInputDataGames({
            id:-1,
            name:"",
            genre:"",
            singleplayer:0,
            multiplayer:0,
            platform:"",
            release:"2010",
            image_url:""
        })
        setDataGames(null)
    }

    return(
        <>
            <Header as='h1' textAlign='center'>Insert Games Form</Header>
            <Form style={{width:'1000px', margin:'0 auto 50px'}} onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Game Title' placeholder='Game Title' name='name' value={inputDataGames.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Game Genre' placeholder='Game Genre' name='genre' value={inputDataGames.genre} onChange={handleChange} />
                    <Form.Input fluid label='Game Release' placeholder='Game Release' name='release' type='number' value={inputDataGames.release} onChange={handleChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Game Platform' placeholder='Game Platform' name='platform' value={inputDataGames.platform} onChange={handleChange} />
                    <Form.Input fluid label='Image URL' placeholder='Image URL' name='image_url' value={inputDataGames.image_url} onChange={handleChange} />
                </Form.Group>
                <Form.Group inline>
                    <label>Mode : </label>
                    <Form.Input fluid label='Singleplayer' placeholder='Singleplayer' name='singleplayer' type='number' value={inputDataGames.singleplayer} onChange={handleChange} />
                    <Form.Input fluid label='Multiplayer' placeholder='Multiplayer' name='multiplayer' type='number' value={inputDataGames.multiplayer} onChange={handleChange} />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                <Link to="/GamesTable">
                    <Form.Button>
                        Back
                    </Form.Button>
                </Link>
            </Form>
        </>
    )
};

export default InsertGamesForm