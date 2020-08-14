import React, { useState, createContext } from "react";

export const DataMovieContext = createContext();

export const DataMovieProvider = props => {
    const [dataMovie, setDataMovie] = useState(null)
    return (
        <DataMovieContext.Provider value={[dataMovie, setDataMovie]}>
            {props.children}
        </DataMovieContext.Provider>
    );
};

export const StatusFormMovieContext = createContext();

export const StatusFormMovieProvider = props => {
    const [statusFormMovie, setStatusFormMovie] = useState("Insert");
    return (
        <StatusFormMovieContext.Provider value={[statusFormMovie, setStatusFormMovie]}>
            {props.children}
        </StatusFormMovieContext.Provider>
    );
};

export const IndexOfMovieContext = createContext();

export const IndexOfMovieProvider = props => {
    const [indexOfFormMovie, setIndexOfFormMovie] = useState(-1)
    return (
        <IndexOfMovieContext.Provider value={[indexOfFormMovie, setIndexOfFormMovie]}>
            {props.children}
        </IndexOfMovieContext.Provider>
    );
};

export const InputDataMovieContext = createContext();

export const InputDataMovieProvider = props => {
    const [inputDataMovie, setInputDataMovie] = useState({
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
    return (
        <InputDataMovieContext.Provider value={[inputDataMovie, setInputDataMovie]}>
            {props.children}
        </InputDataMovieContext.Provider>
    );
};