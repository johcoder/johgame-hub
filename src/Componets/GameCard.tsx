import React from 'react'
import { Games } from '../Hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface props{
    game:Games;
}
const GameCard = ({game} : props) => {

  return (
    <Card borderRadius={10} overflow= "hidden">
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize= "2xl">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard;