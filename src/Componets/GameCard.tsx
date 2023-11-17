import React from 'react'
import { Games } from '../Hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';

interface props{
    game:Games;
}
const GameCard = ({game} : props) => {

  return (
    <Card borderRadius={10} overflow= "hidden">
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize= "2xl">{game.name}</Heading>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCard;