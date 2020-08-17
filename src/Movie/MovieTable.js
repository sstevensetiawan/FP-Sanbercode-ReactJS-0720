import React, { useContext, useEffect, useState } from "react";
import { Header, Table, Image, Button, Rating, Icon, Select, Form, Segment } from 'semantic-ui-react'
import Axios from 'axios'
import { DataMovieContext, StatusFormMovieContext, IndexOfMovieContext, InputDataMovieContext } from "./MovieContext";
import { Link } from 'react-router-dom'

const MovieTable = () => {
    const [dataMovie, setDataMovie] = useContext(DataMovieContext)
    const [statusFormMovie, setStatusFormMovie] = useContext(StatusFormMovieContext)
    const [indexOfFormMovie, setIndexOfFormMovie] = useContext(IndexOfMovieContext)
    const [inputDataMovie, setInputDataMovie] = useContext(InputDataMovieContext)
    const [filtering, setFilter] = useState(null)
    const [check, setCheck] = useState(null)


    const filterOption = [
        { key: 'title', value: 'title', text: 'Title' },
        { key: 'genre', value: 'genre', text: 'Genre' },
        { key: 'description', value: 'description', text: 'Description' },
      ]

    useEffect( (filter,check) => {
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

    const handleEdit = (event) =>{
        let idDataMovie = parseInt(event.target.value)
        let dataEditFilm = dataMovie.find(x=> x.id === idDataMovie)
        setInputDataMovie({
            id : dataEditFilm.id,
            created_at : dataEditFilm.created_at,
            updated_at : dataEditFilm.updated_at,
            title : dataEditFilm.title,
            description : dataEditFilm.description,
            year : dataEditFilm.year,
            duration : dataEditFilm.duration,
            genre : dataEditFilm.genre,
            rating : dataEditFilm.rating,
            review : dataEditFilm.review,
            image_url : dataEditFilm.image_url
        })
        setIndexOfFormMovie(idDataMovie)
        setStatusFormMovie("Update")
    }

    const handleDelete = (event) => {
        let idDataMovie = parseInt(event.target.value)
        let dataDeleteMovie = dataMovie.filter(el => el.id !== idDataMovie)
        Axios.delete(`https://backendexample.sanbersy.com/api/movies/${idDataMovie}`)
        .then(res => {
          console.log(res)
        })
        setDataMovie([...dataDeleteMovie])
    }
    return (
        <>
        <Header as='h1' textAlign='center'>Movie Table</Header>
        <Table celled padded style={{width:'85%', margin:'0 auto 50px auto'}}>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Title (Year)</Table.HeaderCell>
                    <Table.HeaderCell>Duration</Table.HeaderCell>
                    <Table.HeaderCell>Genre</Table.HeaderCell>
                    <Table.HeaderCell>Rating</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Review</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {dataMovie !== null && dataMovie.map((item, index)=>{
                    return(
                    <Table.Row key={index}>
                        <Table.Cell style={{width:'100px'}} >
                            <Image src={item.image_url} style={{width:'75px', height:'100px'}}/>
                        </Table.Cell>
                        <Table.Cell style={{width:'200px'}} >
                            <Header as='h5' textAlign='center'>{item.title} ({item.year})</Header>
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'150px'}}>
                            {item.duration} Minutes
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'150px'}}>
                            {item.genre}
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'175px'}}>
                            <Rating icon='star' defaultRating={item.rating > 8 ? 5 : item.rating > 6 ? 4 : item.rating > 4 ? 3 : item.rating > 2 ? 2 : 1} maxRating={5} disabled/>  ({item.rating}/10)
                        </Table.Cell>
                        <Table.Cell style={{width:'900px'}}>
                            {item.description}
                        </Table.Cell>
                        <Table.Cell style={{width:'900px'}}>
                            {item.review}
                        </Table.Cell>
                        <Table.Cell style={{width:'235px'}} >
                            <Button.Group>
                                <Link to="/UpdateMovieForm">
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
                    <Table.HeaderCell colSpan='8'>
                        <Link to="/InsertMovieForm">

                            <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='small'
                        >
                            <Icon name='film' /> Insert Movie
                        </Button>
                        </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
        </>
    )
}

export default MovieTable
