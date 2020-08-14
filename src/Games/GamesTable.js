import React, { useContext,useEffect } from "react";
import { Header, Table, Image, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { DataGamesContext, StatusFormGamesContext, IndexOfGamesContext, InputDataGamesContext } from "./GamesContext";

const GamesTable = () => {
    const [dataGames, setDataGames] = useContext(DataGamesContext)
    const [statusFormGames, setStatusFormGames] = useContext(StatusFormGamesContext)
    const [indexOfFormGames, setIndexOfFormGames] = useContext(IndexOfGamesContext)
    const [inputDataGames, setInputDataGames] = useContext(InputDataGamesContext)

    useEffect( () => {
        if (dataGames === null){
          Axios.get(`https://backendexample.sanbersy.com/api/games`)
          .then(res => {
            setDataGames(res.data.map(el=>{ return {
                id : el.id,
                created_at : el.created_at,
                updated_at : el.updated_at,
                name : el.name,
                genre : el.genre,
                singlePlayer : el.singlePlayer,
                multiplayer : el.multiplayer,
                platform : el.platform,
                release : el.release,
                image_url : el.image_url}} ))
          })
        }
    }, [dataGames])

    const handleEdit = (event) =>{
        let idDataGames = parseInt(event.target.value)
        let dataEditFilm = dataGames.find(x=> x.id === idDataGames)
        setInputDataGames({
            id : dataEditFilm.id,
            created_at : dataEditFilm.created_at,
            updated_at : dataEditFilm.updated_at,
            name : dataEditFilm.name,
            genre : dataEditFilm.genre,
            singleplayer : dataEditFilm.singlePlayer,
            multiplayer : dataEditFilm.multiplayer,
            platform : dataEditFilm.platform,
            release : dataEditFilm.release,
            image_url : dataEditFilm.image_url})
        setIndexOfFormGames(idDataGames)
        setStatusFormGames("Update")
    }

    const handleDelete = (event) => {
        let idDataGames = parseInt(event.target.value)
        let dataDeleteGames = dataGames.filter(el => el.id !== idDataGames)
        Axios.delete(`https://backendexample.sanbersy.com/api/games/${idDataGames}`)
        .then(res => {
          console.log(res)
        })
        setDataGames([...dataDeleteGames])
      }

    return (
        <>
        <Header as='h1' textAlign='center'>Games Table</Header>
        <Table celled padded style={{width:'80%', margin:'0 auto'}}>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Release</Table.HeaderCell>
                    <Table.HeaderCell>Genre</Table.HeaderCell>
                    <Table.HeaderCell>Mode</Table.HeaderCell>
                    <Table.HeaderCell>Platform</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {dataGames !== null && dataGames.map((item, index)=>{
                    return(
                    <Table.Row key={index}>
                        <Table.Cell style={{width:'100px'}} >
                            <Image src={item.image_url} style={{width:'75px', height:'100px'}}/>
                        </Table.Cell>
                        <Table.Cell style={{width:'200px'}} >
                            <Header as='h5' textAlign='center'>{item.name}</Header>
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {item.release}
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'200px'}} >
                            {item.genre} 
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'150px'}} >
                            Singleplayer : {item.singlePlayer === 1 ? "Yes" : "No"}<br/>
                            Multiplayer : {item.multiplayer === 1 ? "Yes" : "No"}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {item.platform}
                        </Table.Cell>
                        <Table.Cell style={{width:'235px'}} >
                            <Button.Group>
                                <Button basic color='green' style={{width:'100px'}} onClick={handleEdit} value={item.id}>Update</Button>
                                <Button basic color='red' style={{width:'100px'}} onClick={handleDelete} value={item.id}>Delete</Button>
                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
        </>
    )
}

export default GamesTable
