import React, { useState, createContext } from "react";

export const DataGamesContext = createContext();

export const DataGamesProvider = props => {
    const [dataGames, setDataGames] = useState(null)
    return (
        <DataGamesContext.Provider value={[dataGames, setDataGames]}>
            {props.children}
        </DataGamesContext.Provider>
    );
};

export const StatusFormGamesContext = createContext();

export const StatusFormGamesProvider = props => {
    const [statusFormGames, setStatusFormGames] = useState("Insert");
    return (
        <StatusFormGamesContext.Provider value={[statusFormGames, setStatusFormGames]}>
            {props.children}
        </StatusFormGamesContext.Provider>
    );
};

export const IndexOfGamesContext = createContext();

export const IndexOfGamesProvider = props => {
    const [indexOfFormGames, setIndexOfFormGames] = useState(-1)
    return (
        <IndexOfGamesContext.Provider value={[indexOfFormGames, setIndexOfFormGames]}>
            {props.children}
        </IndexOfGamesContext.Provider>
    );
};

export const InputDataGamesContext = createContext();

export const InputDataGamesProvider = props => {
    const [inputDataGames, setInputDataGames] = useState({
        id:-1,
        created_at : "",
        updated_at : "",
        name:"",
        genre:"",
        singleplayer:null,
        multiplayer:null,
        platform:"",
        release:"2010",
        image_url:""})
    return (
        <InputDataGamesContext.Provider value={[inputDataGames, setInputDataGames]}>
            {props.children}
        </InputDataGamesContext.Provider>
    );
};