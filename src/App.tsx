import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Componets/NavBar";
import GameGrid from "./Componets/GameGrid";
import GenreList from "./Componets/GenreList";
import { Genre } from "./Hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./Componets/PlatformSelector";
import { Platform } from "./Hooks/usePlatform";
import SortSelector from "./Componets/SortSelector";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setselectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack marginBottom={5}>
          <PlatformSelector
            selectedplatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector />
        </HStack>

        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
