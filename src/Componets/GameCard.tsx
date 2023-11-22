import React from 'react'
import { Games } from '../Hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import croppedUrlImage from '../services/image-url';
import Emoji from './Emoji';

interface props{
    game:Games;
}
const GameCard = ({game} : props) => {

  return (
    <Card  >
        <Image src={croppedUrlImage(game.background_image) } />
        <CardBody>
        <HStack justifyContent= "space-between" marginBottom={3}>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize= "2xl">{game.name} <Emoji rating={game.rating_top}/></Heading>
            
            
        </CardBody>
    </Card>
  )
}

export default GameCard;