import React, { useContext, useState } from "react"
import { MovieContext } from "./MovieContext"
import { Form, Rating, Header } from 'semantic-ui-react'
import Axios from 'axios'

const MovieForm = () =>{
    const [inputDataMovie, setInputDataMovie] = useState({
        id: "",
        created_at: "",
        updated_at: "",
        title: "",  
        description: "", 
        year: 2020, 
        duration: 1, 
        genre:"", 
        rating:1,
        review: "",
        image_url: ""}
    );
    const [movie, setMovie] = useContext(MovieContext);
    const [statusFormMovie, setStatusFormMovie] = useContext(MovieContext);
    const [indexOfFormMovie, setIndexOfFormMovie] = useContext(MovieContext);
    const [dataFilm, setDataFilm] = useContext(MovieContext);

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        switch (typeOfInput){
            case "title":{
                setInputDataMovie({...dataFilm, title: event.target.value});
                break
            }
            case "description":{
                setInputDataMovie({...dataFilm, description: event.target.value});
                break
            }
            case "year":{
                if(event.target.value < 1){
                    setInputDataMovie({...dataFilm, year: 1});
                }
                else{
                    setInputDataMovie({...dataFilm, year: event.target.value});
                }
                break
            }
            case "duration":{
                if(event.target.value < 1){
                    setInputDataMovie({...dataFilm, duration: 1});
                }
                else{
                    setInputDataMovie({...dataFilm, duration: event.target.value});
                }
                break
            } 
            case "genre":{
                setInputDataMovie({...dataFilm, genre: event.target.value});
                break
            }
            case "rating":{
                setInputDataMovie({...dataFilm, rating: event.target.value})
                break
            }
            default:{
                break;
            }
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        let title = dataFilm.title
        let description = dataFilm.description
        let year = dataFilm.year.toString()
        let duration = dataFilm.duration.toString()
        let genre = dataFilm.genre
        let rating = dataFilm.rating.toString()
        if (statusFormMovie === "Insert"){        
            Axios.post(`https://backendexample.sanbersy.com/api/movies`, {title:title, description: description, year: year, duration: duration, genre:genre, rating:rating})
            .then(res => {
                setMovie([
                  ...movie, 
                  { id : res.data.id, 
                    title : title, 
                    description : description, 
                    year : year, 
                    duration : duration, 
                    genre : genre, 
                    rating : rating
                  }])
            })
        }else if(statusFormMovie === "Update"){
            Axios.put(`https://backendexample.sanbersy.com/api/movies/${indexOfFormMovie}`, {title: title, description: description, year: year, duration: duration, genre:genre, rating:rating})
            .then(() => {
                let dataEditFilm = movie.find(el=> el.id === indexOfFormMovie)
                dataEditFilm.title = title
                dataEditFilm.description = description
                dataEditFilm.year = year
                dataEditFilm.duration = duration
                dataEditFilm.genre = genre
                dataEditFilm.rating = rating
                setMovie([...dataEditFilm])
            })
        }
        setStatusFormMovie("Insert")
        setIndexOfFormMovie(-1)
        setInputDataMovie({id: "",
        created_at: "",
        updated_at: "",
        title: "",  
        description: "", 
        year: 2020, 
        duration: 1, 
        genre:"", 
        rating:1,
        review: "",
        image_url: ""})
    }

    return(
        <>
            <Header as='h1' textAlign='center'>Movie Form</Header>
            <Form style={{width:'1000px', margin:'0 auto'}} onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Movie Title' placeholder='Movie Title' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Movie Genre' placeholder='Movie Genre' style={{width:'600px'}} />
                <Form.Input fluid label='Image URL' placeholder='Image URL' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Movie Duration' placeholder='Movie Duration' type='number' name='duration' value={inputDataMovie.duration} onChange={handleChange} />
                <Form.Input fluid label='Release Year' placeholder='Release Year' type='number' name='year' value={inputDataMovie.year} onChange={handleChange} />
                <div>
                    <div>Rating: {inputDataMovie.rating}</div>
                    <input type='range' name='rating' min={1} max={10} value={inputDataMovie.rating} onChange={handleChange} />
                    <br />
                    <Rating rating={(inputDataMovie.rating/2) < 1 ? 1 : (inputDataMovie.rating/2)} maxRating={5} disabled/>
                </div>
                </Form.Group>
                <Form.TextArea label='Description' placeholder='Tell us more about you...' name='description' value={inputDataMovie.description} onChange={handleChange} />
                <Form.Button>Submit</Form.Button>
            </Form>
        </>
    )
};

export default MovieForm