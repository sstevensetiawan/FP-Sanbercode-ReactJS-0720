import React, { useState, createContext } from "react";

export const DataLogin = createContext();

export const DataLoginProvider = props => {
    const [dataLogin, setDataLogin] = useState(null)
    return (
        <DataLogin.Provider value={[dataLogin, setDataLogin]}>
            {props.children}
        </DataLogin.Provider>
    );
};

export const DataSession = createContext();

export const DataSessionProvider = props => {
    const [dataSession, setDataSession] = useState({
        id:-1,
        created_at : "",
        updated_at : "",
        username : "",
        password : ""
    })
    return (
        <DataSession.Provider value={[dataSession, setDataSession]}>
            {props.children}
        </DataSession.Provider>
    );
};