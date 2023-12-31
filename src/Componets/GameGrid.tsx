'use client';
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/usePlatform";
import { GameQuery } from "../App";

interface props{
  gamequery: GameQuery
}


const GameGrid = ({gamequery}: props) => {
  const { data, error, isLoading } = useGames(gamequery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if(error) return <Text>{error}</Text>
  return (
    
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
               <GameCard game={game} />
          </GameCardContainer>
          
        ))}
      </SimpleGrid>
    
  );
};

export default GameGrid;
