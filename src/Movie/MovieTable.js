import React, { useContext,useEffect } from "react";
import { MovieContext } from "./MovieContext"
import { Header, Table, Rating, Image, Button } from 'semantic-ui-react'
import Axios from 'axios'

const MovieTable = () => {
    const [movie, setMovie] = useContext(MovieContext)
    const [statusFormMovie, setStatusFormMovie] = useContext(MovieContext);
    const [indexOfFormMovie, setIndexOfFormMovie] = useContext(MovieContext);
    const [inputDataMovie, setInputDataMovie] = useContext(MovieContext);

    const handleEdit = (event) =>{
        let idDataFilm = parseInt(event.target.value)
        let dataFilm = movie.find(x=> x.id === idDataFilm)
        setInputDataMovie({title: dataFilm.title, description: dataFilm.description, year: dataFilm.year, duration: dataFilm.duration, genre: dataFilm.genre, rating: dataFilm.rating})
        setIndexOfFormMovie(idDataFilm)
        setStatusFormMovie("Update")
    }

    const handleDelete = (event) => {
        let idDataFilm = parseInt(event.target.value)
        let dataDeleteFilm = movie.filter(el => el.id !== idDataFilm)
        Axios.delete(`https://backendexample.sanbersy.com/api/movies/${idDataFilm}`)
        .then(res => {
          console.log(res)
        })
        setMovie([...dataDeleteFilm])
        
      }

    useEffect( () => {
        if (movie === null){
          Axios.get(`https://backendexample.sanbersy.com/api/movies`)
          .then(res => {
            setMovie(res.data.map(el=>{ return {image_url: el.image_url, title: el.title, description: el.description, year: el.year, duration: el.duration, genre: el.genre, rating: el.rating }} ))
          })
        }
    }, [movie])
    return (
        <>
        <Header as='h1' textAlign='center'>Movie Table</Header>
        <Table celled padded style={{width:'95%', margin:'0 auto'}}>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Duration</Table.HeaderCell>
                    <Table.HeaderCell>Genre</Table.HeaderCell>
                    <Table.HeaderCell>Rating</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {movie !== null && movie.map((item, index)=>{
                    return(
                    <Table.Row key={index}>
                        <Table.Cell>
                            <Image src={item.image_url} style={{width:'50px', height:'75px'}}/>
                        </Table.Cell>
                        <Table.Cell style={{width:'250px'}}>
                            <Header as='h5' textAlign='center'>{item.title}</Header>
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'150px'}}>
                        {item.id} Minutes
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'150px'}}>
                        {item.genre}
                        </Table.Cell>
                        <Table.Cell textAlign='center' style={{width:'175px'}}>
                        <Rating icon='star' defaultRating={(item.rating/2 < 5) ? (item.rating/2)+1 : 5} maxRating={5} disabled/>  ({item.rating}/10)
                        </Table.Cell>
                        <Table.Cell style={{width:'900px'}}>
                        {item.description}
                        </Table.Cell>
                        <Table.Cell>
                            <Button style={{width:'100px', margin:'0 0 10px 0'}} onClick={handleEdit} value={item.id}>Update</Button>
                            <Button style={{width:'100px'}} onClick={handleDelete} value={item.id}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
        </>
    )
}

export default MovieTable
