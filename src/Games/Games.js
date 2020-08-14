import React from "react"
import HeaderGames from "./HeaderGames"
import { DataGamesProvider, StatusFormGamesProvider, IndexOfGamesProvider, InputDataGamesProvider  } from "./GamesContext"
import GamesTable from "./GamesTable"
import GamesList from "./GamesList"
import GamesForm from "./GamesForm"
import { Segment } from "semantic-ui-react"

const Games = () =>{
  return(
    <div>
        <HeaderGames />
        <DataGamesProvider>
        <StatusFormGamesProvider>
        <IndexOfGamesProvider>
        <InputDataGamesProvider>
            <GamesList />
            <Segment />
            <GamesTable />
            <Segment />
            <GamesForm />
        </InputDataGamesProvider>
        </IndexOfGamesProvider>
        </StatusFormGamesProvider>
        </DataGamesProvider>
    </div>
  )
}

export default Games