import React, { useContext, useEffect } from "react";
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { DataGamesContext, StatusFormGamesContext, IndexOfGamesContext, InputDataGamesContext } from "./GamesContext";

const MovieList = () =>{
  const [dataGames, setDataGames] = useContext(DataGamesContext)
  const [statusFormGames, setStatusFormGames] = useContext(StatusFormGamesContext)
  const [indexOfFormGames, setIndexOfFormGames] = useContext(IndexOfGamesContext)
  const [inputDataGames, setInputDataGames] = useContext(InputDataGamesContext)

  const handleView = (event) =>{
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
  }

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

  

    return(
      <>
        <div style={{width:'85%', margin:'0 auto'}}>
          <ul>
            <Card.Group>
            {dataGames !== null && dataGames.map((item, index)=>{ 
              return (
                <Card style={{width:'300px'}}>
                    <Image src={item.image_url} style={{width:'300px', height:'400px'}} widths='equal'/>
                    <Card.Content extra style={{height:'80px'}} >
                        <Card.Header>{item.name} (<b>{item.release}</b>)</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta>
                            <Icon name='users' /><span className='Mode'>{item.singlePlayer === 1 && item.multiplayer === 1 ? "Singleplayer, Multiplayer" : item.singlePlayer === 1 ? "Singleplayer" : item.multiplayer === 1 ? "Multiplayer" : "-" }</span>
                        </Card.Meta>
                        <Card.Meta>
                            <Icon name='game' /><span className='Platform'>{item.platform}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to="/GamesDetail">
                        <Button fluid value={item.id} onClick={handleView}>View Detail</Button>
                      </Link>
                    </Card.Content>
                </Card>
              )
              })}
            </Card.Group>
          </ul>
        </div>
      </>
    )
  
  }
  
  export default MovieList