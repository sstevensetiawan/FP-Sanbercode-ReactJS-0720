import React, { useState, createContext } from "react";

export const DataLoginContext = createContext();

export const DataLoginProvider = props => {
    const [dataLogin, setDataLogin] = useState(null)
    return (
        <DataLoginContext.Provider value={[dataLogin, setDataLogin]}>
            {props.children}
        </DataLoginContext.Provider>
    );
};

export const DataSessionContext = createContext();

export const DataSessionProvider = props => {
    const [dataSession, setDataSession] = useState({
        id:-1,
        created_at : "",
        updated_at : "",
        username : "a",
        password : ""
    })
    return (
        <DataSessionContext.Provider value={[dataSession, setDataSession]}>
            {props.children}
        </DataSessionContext.Provider>
    );
};