import React from "react"
import {MovieProvider} from "./MovieContext"
import MovieList from "./MovieList"
import MovieTable from "./MovieTable"
import MovieForm from "./MovieForm"
import HeaderMovie from "./HeaderMovie"
import { Segment } from "semantic-ui-react"

const Movie = () =>{
  return(
    <div>
        <HeaderMovie />
        <MovieProvider>
          <MovieList />
          <Segment></Segment>
            <MovieTable />
            <Segment></Segment>
        </MovieProvider>
    </div>
  )
}

export default Movie