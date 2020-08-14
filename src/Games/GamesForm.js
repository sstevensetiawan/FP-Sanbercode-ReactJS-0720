import React, { useContext, useState } from "react"
import { DataGamesContext, StatusFormGamesContext, IndexOfGamesContext, InputDataGamesContext } from "./GamesContext";
import { Form, Header, Checkbox } from 'semantic-ui-react'
import Axios from 'axios'

const GamesForm = () =>{
    const [cBSinglePlayer, setCBSinglePlayer] = useState(false)
    const [cBMultiPlayer, setCBMultiPlayer] = useState(true)
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
                if(cBSinglePlayer===true){
                    setInputDataGames({...inputDataGames, singleplayer: 0});
                    setCBSinglePlayer(false)
                }
                else{
                    setInputDataGames({...inputDataGames, singleplayer: 1});
                    setCBSinglePlayer(true)
                }
                break
            }
            case "multiplayer":{
                if(cBMultiPlayer===true){
                    setInputDataGames({...inputDataGames, multiplayer: 0});
                    setCBMultiPlayer(false)
                }
                else{
                    setInputDataGames({...inputDataGames, multiplayer: 1});
                    setCBMultiPlayer(true)
                }
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
        }else if(statusFormGames === "Update"){
            Axios.put(`https://backendexample.sanbersy.com/api/games/${indexOfFormGames}`, {
                name : name, 
                genre: genre, 
                release: release, 
                singlePlayer : singleplayer, 
                multiplayer : multiplayer,
                platform : platform,
                image_url : image_url
            })
            .then(() => {
                let dataEditGames = dataGames.find(el=> el.id === indexOfFormGames)
                dataEditGames.name = name
                dataEditGames.genre = genre
                dataEditGames.release = release
                dataEditGames.singlePlayer = singleplayer
                dataEditGames.multiplayer = multiplayer
                dataEditGames.platform = platform
                dataEditGames.image_url = image_url
                setDataGames([...dataGames])
            })
        }
        setStatusFormGames("Insert")
        setIndexOfFormGames(-1)
        setInputDataGames({
            id:-1,
            name:"",
            genre:"",
            singleplayer:null,
            multiplayer:null,
            platform:"",
            release:"2010",
            image_url:""
        })
    }

    return(
        <>
            <Header as='h1' textAlign='center'>Games Form</Header>
            <Form style={{width:'1000px', margin:'0 auto'}} onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Game Title' placeholder='Game Title' name='name' value={inputDataGames.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Game Genre' placeholder='Game Genre' name='genre' value={inputDataGames.genre} onChange={handleChange} />
                    <Form.Input fluid label='Game Release' placeholder='Game Release' name='release' value={inputDataGames.release} onChange={handleChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Game Platform' placeholder='Game Platform' name='platform' value={inputDataGames.platform} onChange={handleChange} />
                    <Form.Input fluid label='Image URL' placeholder='Image URL' name='image_url' value={inputDataGames.image_url} onChange={handleChange} />
                </Form.Group>
                <Form.Group inline>
                    <label>Mode : </label>
                    <Form.Field control={Checkbox} label='Singleplayer' name='singleplayer' value={cBSinglePlayer} checked={cBSinglePlayer} onChange={handleChange} />
                    <Form.Field control={Checkbox} label='Multiplayer' name='multiplayer' value={cBMultiPlayer} checked={cBMultiPlayer} onChange={handleChange} />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </>
    )
};

export default GamesForm