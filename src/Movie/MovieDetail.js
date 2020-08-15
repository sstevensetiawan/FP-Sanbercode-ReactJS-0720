import React, { useContext } from 'react'
import { Grid, Segment, Item, Rating, Button } from 'semantic-ui-react'
import { InputDataMovieContext } from './MovieContext'
import { Link } from 'react-router-dom'


const MovieDetail = () =>{
    const [inputDataMovie, setInputDataMovie] = useContext(InputDataMovieContext)

    const handleClear = () => {
      setInputDataMovie({
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

    const setRating = (rating) =>{
      if(rating > 8 && rating <= 10){
        return 5
      }
      else if(rating > 6 && rating <= 8){
        return 4
      }
      else if(rating > 4 && rating <= 6){
        return 3
      }
      else if(rating > 2 && rating <= 4){
        return 2
      }
      else{
        return 1
      }
    }

    return(
        <>
            <div style={{width:'50%', margin:'0 auto 50px auto'}}>
            <Grid>
                <Grid.Column>
                    <Segment>
                        <Item.Group>
                        <Item>
                        <Item.Image style={{width:'200px',height:'275px'}} src={inputDataMovie.image_url} />

                        <Item.Content>
                            <Item.Header as='h2'>{inputDataMovie.title} ({inputDataMovie.year})</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                Genre : {inputDataMovie.genre}<br/>
                                Duration : {inputDataMovie.duration}<br/>
                                Rating : <Rating icon='star' defaultRating={setRating(inputDataMovie.rating)} maxRating={5} disabled/> ({inputDataMovie.rating}/10)
                                <Segment>
                                    Description : 
                                    <p>{inputDataMovie.description}</p>
                                </Segment>
                                <Segment>
                                    Review : 
                                    <p>{inputDataMovie.review}</p>
                                </Segment>
                            </Item.Description>
                            <Item.Extra></Item.Extra>
                        </Item.Content>
                    </Item>
                    </Item.Group>
                    </Segment>
                    <Link to="/">
                        <Button onClick={handleClear}>Back</Button>
                    </Link>
                    </Grid.Column>
                </Grid>
            </div>
        </>
    )
}

export default MovieDetail