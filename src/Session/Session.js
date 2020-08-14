import React from "react"
import { DataSession, DataLogin, DataSessionProvider, DataLoginProvider } from  "./SessionContext"
import SessionForm from "./SessionForm"
const Movie = () =>{
  return(
    <div>
        <DataSessionProvider>
        <DataLoginProvider>
            <SessionForm />
        </DataLoginProvider>
        </DataSessionProvider>

</div>
  )
}

export default Movie