import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";

function App() {
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
         <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"} >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
