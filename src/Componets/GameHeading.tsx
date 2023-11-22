import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
interface props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: props) => {
   const Gameheading= `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading marginY={3}>{Gameheading}</Heading>
  )
}

export default GameHeading