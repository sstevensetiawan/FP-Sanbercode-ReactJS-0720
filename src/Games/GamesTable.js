import React, { useContext,useEffect } from "react";
import { Header, Table, Image, Button, Icon } from 'semantic-ui-react'
import Axios from 'axios'
import { DataGamesContext, StatusFormGamesContext, IndexOfGamesContext, InputDataGamesContext } from "./GamesContext";
import { Link } from 'react-router-dom'

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
        let dataEditGames = dataGames.find(x=> x.id === idDataGames)
        setInputDataGames({
            id : dataEditGames.id,
            created_at : dataEditGames.created_at,
            updated_at : dataEditGames.updated_at,
            name : dataEditGames.name,
            genre : dataEditGames.genre,
            singleplayer : dataEditGames.singlePlayer,
            multiplayer : dataEditGames.multiplayer,
            platform : dataEditGames.platform,
            release : dataEditGames.release,
            image_url : dataEditGames.image_url})
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
        <Table celled structured style={{width:'80%', margin:'0 auto 50px auto'}}>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell rowSpan='2'>Image</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Title</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Release</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Genre</Table.HeaderCell>
                    <Table.HeaderCell colSpan='2'>Mode</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Platform</Table.HeaderCell>
                    <Table.HeaderCell rowSpan='2'>Action</Table.HeaderCell>
                </Table.Row>
                
                <Table.Row textAlign='center'>
                    <Table.HeaderCell>Singleplayer</Table.HeaderCell>
                    <Table.HeaderCell>Multiplayer</Table.HeaderCell>
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
                        <Table.Cell textAlign='center' style={{width:'100px'}} >
                            {item.singlePlayer === 1 ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='x' size='large' /> }
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'100px'}} >
                            {item.multiplayer === 1 ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='x' size='large' /> }
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                            {item.platform}
                        </Table.Cell>
                        <Table.Cell style={{width:'230px'}} >
                            <Button.Group>
                                <Link to="/UpdateGamesForm">
                                    <Button basic color='green' style={{width:'100px'}} onClick={handleEdit} value={item.id}>Update</Button>
                                </Link>
                                <Button basic color='red' style={{width:'100px'}} onClick={handleDelete} value={item.id}>Delete</Button>
                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>
                    )
                })}
            </Table.Body>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='7'>
                    <Link to="/InsertGamesForm">
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='small'
                        >
                            <Icon name='gamepad' /> Insert Games
                        </Button>
                    </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
        </>
    )
}

export default GamesTable
