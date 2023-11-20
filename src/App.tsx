import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";
import { Genre } from "./Hooks/useGenres";
import { useState } from "react";

function App() {
  const[selectedGenre,setselectedGenre]=useState<Genre | null >(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"  "aside main"`,
      }}
      templateColumns={{
        base: "ifr",
        lg:"200px 1fr"
      }}
    >
      <GridItem area={"nav"} >
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}  paddingX= "5px">
         <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setselectedGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem area={"main"} >
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
