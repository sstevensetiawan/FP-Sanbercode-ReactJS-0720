import React, { useContext } from "react"
import { DataMovieContext, StatusFormMovieContext, IndexOfMovieContext, InputDataMovieContext } from "./MovieContext";
import { Form, Header, Checkbox, Rating } from 'semantic-ui-react'
import Axios from 'axios'

const MovieForm = () =>{
    const [dataMovie, setDataMovie] = useContext(DataMovieContext)
    const [statusFormMovie, setStatusFormMovie] = useContext(StatusFormMovieContext)
    const [indexOfFormMovie, setIndexOfFormMovie] = useContext(IndexOfMovieContext)
    const [inputDataMovie, setInputDataMovie] = useContext(InputDataMovieContext)

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        switch (typeOfInput){
            case "title":{
                setInputDataMovie({...inputDataMovie, title: event.target.value});
                break
            }
            case "description":{
                setInputDataMovie({...inputDataMovie, description: event.target.value});
                break
            }
            case "year":{
                if(event.target.value < 1){
                    setInputDataMovie({...inputDataMovie, year: 1});
                }
                else{
                    setInputDataMovie({...inputDataMovie, year: event.target.value});
                }
                break
            }
            case "duration":{
                if(event.target.value < 1){
                    setInputDataMovie({...inputDataMovie, duration: 1});
                }
                else{
                    setInputDataMovie({...inputDataMovie, duration: event.target.value});
                }
                break
            } 
            case "genre":{
                setInputDataMovie({...inputDataMovie, genre: event.target.value});
                break
            }
            case "review":{
                setInputDataMovie({...inputDataMovie, review: event.target.value});
                break
            }
            case "rating":{
                setInputDataMovie({...inputDataMovie, rating: event.target.value})
                break
            }
            case "image_url":{
                setInputDataMovie({...inputDataMovie, image_url: event.target.value})
                break
            }
            default:{
                break;
            }
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        let title = inputDataMovie.title
        let description = inputDataMovie.description
        let year = inputDataMovie.year
        let duration = inputDataMovie.duration
        let genre = inputDataMovie.genre
        let rating = inputDataMovie.rating
        let review = inputDataMovie.review
        let image_url = inputDataMovie.image_url
        if (statusFormMovie === "Insert"){        
            Axios.post(`https://backendexample.sanbersy.com/api/movies`, {
                title : title,
                    description : description,
                    year : year,
                    duration : duration,
                    genre : genre,
                    rating : rating,
                    review : review,
                    image_url : image_url
            })
            .then(res => {
                setDataMovie([...dataMovie, { 
                    id : res.data.id, 
                    title : title,
                    description : description,
                    year : year,
                    duration : duration,
                    genre : genre,
                    rating : rating,
                    review : review,
                    image_url : image_url
                  }])
            })
        }else if(statusFormMovie === "Update"){
            Axios.put(`https://backendexample.sanbersy.com/api/movies/${indexOfFormMovie}`, {
                title : title,
                description : description,
                year : year,
                duration : duration,
                genre : genre,
                rating : rating,
                review : review,
                image_url : image_url
            })
            .then(() => {
                let dataEditMovie = dataMovie.find(el=> el.id === indexOfFormMovie)
                dataEditMovie.title = title
                dataEditMovie.description = description
                dataEditMovie.year = year
                dataEditMovie.duration = duration
                dataEditMovie.genre = genre
                dataEditMovie.rating = rating
                dataEditMovie.review = review
                dataEditMovie.image_url = image_url
                setDataMovie([...dataMovie])
            })
        }
        setStatusFormMovie("Insert")
        setIndexOfFormMovie(-1)
        setInputDataMovie({
            id : -1,
            created_at : "",
            updated_at : "",
            title : "",
            description : "",
            year : 2010,
            duration : 100,
            genre : "",
            rating : 1,
            review : "",
            image_url : ""
        })
    }

    return(
        <>
            <Header as='h1' textAlign='center'>Movie Form</Header>
            <Form style={{width:'1000px', margin:'0 auto'}} onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Movie Title' placeholder='Movie Title' name='title' value={inputDataMovie.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Movie Genre' placeholder='Movie Genre' style={{width:'600px'}} name='genre' value={inputDataMovie.genre} onChange={handleChange} />
                <Form.Input fluid label='Image URL' placeholder='Image URL' name='image_url' value={inputDataMovie.image_url} onChange={handleChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Movie Duration' placeholder='Movie Duration' type='number' name='duration' value={inputDataMovie.duration} onChange={handleChange} />
                <Form.Input fluid label='Release Year' placeholder='Release Year' type='number' name='year' value={inputDataMovie.year} onChange={handleChange} />
                <div>
                    <div>Rating: {inputDataMovie.rating}</div>
                    <input type='range' name='rating' min={1} max={10} value={inputDataMovie.rating} onChange={handleChange} />
                    <br />
                    <Rating rating={inputDataMovie.rating > 8 ? 5 : inputDataMovie.rating > 6 ? 4 : inputDataMovie.rating > 4 ? 3 : inputDataMovie.rating > 2 ? 2 : 1} maxRating={5} disabled/>
                </div>
                </Form.Group>
                <Form.TextArea label='Description' placeholder='Tell us more about the movie...' name='description' value={inputDataMovie.description} onChange={handleChange} />
                <Form.TextArea label='Review' placeholder='Tell us more about your opinion...' name='review' value={inputDataMovie.review} onChange={handleChange} />
                <Form.Button>Submit</Form.Button>
            </Form>
        </>
    )
};

export default MovieForm