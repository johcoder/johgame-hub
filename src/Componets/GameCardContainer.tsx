import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface props{
    children: ReactNode;
}
const GameCardContainer = ({children} : props) => {
  return (
    <div>
       <Box width= "100%" borderRadius={10} overflow= "hidden">
        {children}
       </Box>
    </div>
  )
}

export default GameCardContainer