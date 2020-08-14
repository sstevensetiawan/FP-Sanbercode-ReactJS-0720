import React from 'react'
import Games from './Games/Games'
import Movie from './Movie/Movie'
import { Route, Switch } from 'react-router-dom'
import Session from './Session/Session'
import Header from './Header'
import Footer from './Footer'


const Container = () => {
    return (
        <>
            <Header />
            <Switch>
               <Route exact path="/">
                    <Movie />
                </Route>
                <Route path="/gameslist">
                    <Games />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Container
