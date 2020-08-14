import React from "react"
import HeaderMovie from "./HeaderMovie"
import { DataMovieProvider, StatusFormMovieProvider, IndexOfMovieProvider, InputDataMovieProvider  } from "./MovieContext"
import MovieTable from "./MovieTable"
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"
import { Segment } from "semantic-ui-react"

const Movie = () =>{
  return(
    <div>
        <HeaderMovie />
        <DataMovieProvider>
        <StatusFormMovieProvider>
        <IndexOfMovieProvider>
        <InputDataMovieProvider>
            <MovieList />
        </InputDataMovieProvider>
        </IndexOfMovieProvider>
        </StatusFormMovieProvider>
        </DataMovieProvider>
    </div>
  )
}

export default Movie