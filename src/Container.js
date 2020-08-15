import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import { DataGamesProvider, StatusFormGamesProvider, IndexOfGamesProvider, InputDataGamesProvider  } from "./Games/GamesContext"
import HeaderGames from "./Games/HeaderGames"
import GamesTable from "./Games/GamesTable"
import GamesList from "./Games/GamesList"
import GamesDetail from "./Games/GamesDetail"
import InsertGamesForm from "./Games/InsertGamesForm"
import UpdateGamesForm from "./Games/UpdateGamesForm"

import { DataMovieProvider, StatusFormMovieProvider, IndexOfMovieProvider, InputDataMovieProvider  } from "./Movie/MovieContext"
import HeaderMovie from "./Movie/HeaderMovie"
import MovieTable from "./Movie/MovieTable"
import MovieList from "./Movie/MovieList"
import MovieDetail from "./Movie/MovieDetail"
import InsertMovieForm from "./Movie/InsertMovieForm"
import UpdateMovieForm from "./Movie/UpdateMovieForm"

import { DataSessionProvider, DataLoginProvider } from  "./Session/SessionContext"
import SessionForm from "./Session/SessionForm"
import HeaderSession from "./Session/HeaderSession"

const Container = () => {
    return (
        <>
            <DataSessionProvider>
            <DataLoginProvider>
            <DataMovieProvider>
            <StatusFormMovieProvider>
            <IndexOfMovieProvider>
            <InputDataMovieProvider>
            <DataGamesProvider>
            <StatusFormGamesProvider>
            <IndexOfGamesProvider>
            <InputDataGamesProvider>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HeaderMovie />
                    <MovieList />
                </Route>
                <Route path="/MoviesTable">
                    <HeaderMovie />
                    <MovieTable />
                </Route>
                <Route path="/GamesList">
                    <HeaderGames />
                    <GamesList />
                </Route>
                <Route path="/GamesTable">
                    <HeaderGames />
                    <GamesTable />
                </Route>
                <Route path="/Login">
                    <HeaderSession />
                    <SessionForm />
                </Route>
                <Route path="/GamesDetail">
                    <HeaderGames />
                    <GamesDetail />
                </Route>
                <Route path="/MoviesDetail">
                    <HeaderMovie />
                    <MovieDetail />
                </Route>
                <Route path="/InsertGamesForm">
                    <HeaderGames />
                    <InsertGamesForm />
                </Route>
                <Route path="/UpdateGamesForm">
                    <HeaderGames />
                    <UpdateGamesForm />
                </Route>
                <Route path="/InsertMovieForm">
                    <HeaderMovie />
                    <InsertMovieForm />
                </Route>
                <Route path="/UpdateMovieForm">
                    <HeaderMovie />
                    <UpdateMovieForm />
                </Route>
            </Switch>
            </InputDataGamesProvider>
            </IndexOfGamesProvider>
            </StatusFormGamesProvider>
            </DataGamesProvider>
            </InputDataMovieProvider>
            </IndexOfMovieProvider>
            </StatusFormMovieProvider>
            </DataMovieProvider>
            </DataLoginProvider>
            </DataSessionProvider>
            <Footer />
        </>
    );
};

export default Container
