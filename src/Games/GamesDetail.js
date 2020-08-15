import React, { useContext, useState } from 'react'
import { Grid, Segment, Item, Button } from 'semantic-ui-react'
import { InputDataGamesContext } from './GamesContext'
import { Link } from 'react-router-dom'


const GamesDetail = () =>{
    const [inputDataGames, setInputDataGames] = useContext(InputDataGamesContext)
    const handleClear = () => {
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
    }
    return(
        <>
            <div style={{width:'50%', margin:'0 auto 50px auto'}}>
                
            <Grid>
                <Grid.Column>
                    <Segment>
                        <Item.Group>
                        <Item>
                        <Item.Image size='tiny' wrapped style={{width:'125px',height:'200px'}} src={inputDataGames.image_url} />

                        <Item.Content>
                            <Item.Header as='h2'>{inputDataGames.name} ({inputDataGames.release})</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                Genre : {inputDataGames.genre}<br/>
                                Platform : {inputDataGames.platform}<br/>
                                Mode : {inputDataGames.singleplayer === 1 && inputDataGames.multiplayer === 1 ? "Singleplayer, Multiplayer" : inputDataGames.singleplayer === 1 ? "Singleplayer" : inputDataGames.multiplayer === 1 ? "Multiplayer" : "-" }
                            </Item.Description>
                            <Item.Extra></Item.Extra>
                        </Item.Content>
                    </Item>
                        </Item.Group>
                    
                    </Segment>
                    <Link to="/GamesList">
                        <Button onClick={handleClear}>Back</Button>
                    </Link>
                    </Grid.Column>
                </Grid>
            </div>
        </>
    )
}

export default GamesDetail