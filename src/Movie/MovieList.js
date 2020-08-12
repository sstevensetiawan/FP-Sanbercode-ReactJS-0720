import React, { useContext, useEffect } from "react";
import { MovieContext } from "./MovieContext"
import { Card, Image, Icon, Rating } from 'semantic-ui-react'
import Axios from 'axios';

const MovieList = () =>{
    const [movie, setMovie] = useContext(MovieContext)

    useEffect( () => {
      if (movie === null){
        Axios.get(`https://backendexample.sanbersy.com/api/movies`)
        .then(res => {
          setMovie(res.data.map(el=>{ return {image_url: el.image_url, title: el.title, description: el.description, year: el.year, duration: el.duration, genre: el.genre, rating: el.rating }} ))
        })
      }
  }, [movie])

    return(
      <ul>
        <Card.Group>
        {movie !== null && movie.map((item, index)=>{ 
          return (
            <Card>
                <Image src={item.image_url} style={{width:'300px', height:'400px'}} widths='equal'/>
                <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Card.Meta>
                        <Icon name='clock outline' /><span className='Duration'>{item.duration} Minutes</span>
                    </Card.Meta>
                    <Card.Meta>
                        <Icon name='film' /><span className='Duration'>{item.genre} Minutes</span>
                    </Card.Meta>
                    <Card.Meta>
                        <Icon name='trophy' /><span className='Duration'><Rating icon='star' defaultRating={(item.rating/2 < 5) ? (item.rating/2)+1 : 5} maxRating={5} disabled/> ({item.rating}/10)</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <p>{item.description}</p>
                </Card.Content>
            </Card>
          )
          })}
        </Card.Group>
      </ul>
    )
  
  }
  
  export default MovieList