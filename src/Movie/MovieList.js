import React, { useContext, useEffect } from "react";
import { Card, Image, Icon, Rating, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { DataMovieContext, StatusFormMovieContext, IndexOfMovieContext, InputDataMovieContext } from "./MovieContext";

const MovieList = () =>{
  const [dataMovie, setDataMovie] = useContext(DataMovieContext)
  const [statusFormMovie, setStatusFormMovie] = useContext(StatusFormMovieContext)
  const [indexOfFormMovie, setIndexOfFormMovie] = useContext(IndexOfMovieContext)
  const [inputDataMovie, setInputDataMovie] = useContext(InputDataMovieContext)

    useEffect( () => {
      if (dataMovie === null){
        Axios.get(`https://backendexample.sanbersy.com/api/movies`)
        .then(res => {
          setDataMovie(res.data.map(el=>{ return {
            id : el.id,
            created_at : el.created_at,
            updated_at : el.updated_at,
            title : el.title,
            description : el.description,
            year : el.year,
            duration : el.duration,
            genre : el.genre,
            rating : el.rating,
            review : el.review,
            image_url : el.image_url
          }} ))
        })
      }
    }, [dataMovie])

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
        <div style={{width:'85%', margin:'0 auto'}}>
          <ul>
            <Card.Group>
            {dataMovie !== null && dataMovie.map((item, index)=>{ 
              return (
                <Card style={{width:'300px'}}>
                    <Image src={item.image_url} style={{width:'300px', height:'400px'}} widths='equal'/>
                    <Card.Content extra style={{height:'100px'}} >
                        <Card.Header>{item.title}<br/>(<b>{item.year}</b>)</Card.Header>
                    </Card.Content>
                    <Card.Content style={{height:'80px'}} extra >
                      <Card.Meta>
                          <Icon name='clock outline' /><span className='Duration'>{item.duration} Minutes</span>
                      </Card.Meta>
                      <Card.Meta>
                          <Icon name='film' /><span className='Genre'>{item.genre}</span>
                      </Card.Meta>
                      <Card.Meta>
                          <Icon name='trophy' /><span className='Rating'><Rating icon='star' defaultRating={setRating(item.rating)} maxRating={5} disabled/> ({item.rating}/10)</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Button fluid value={item.id}>View Detail</Button>
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