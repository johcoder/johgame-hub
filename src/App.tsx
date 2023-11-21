import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";
import { Genre } from "./Hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./Componets/PlatformSelector";
import { Platform } from "./Hooks/usePlatform";
import SortSelector from "./Componets/SortSelector";

export interface GameQuery{
  genre: Genre | null,
  platform: Platform |  null,
  sortOrder: string;
}

function App() {
  const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"  "aside main"`,
      }}
      templateColumns={{
        base: "ifr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack marginBottom={5}>
          <PlatformSelector
            selectedplatform={gameQuery.platform}
            onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}
          />
          <SortSelector sortorder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}/>
        </HStack>

        <GameGrid
          gamequery={gameQuery}
          
        />
      </GridItem>
    </Grid>
  );
}

export default App;
