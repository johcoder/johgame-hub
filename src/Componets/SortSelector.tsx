import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <>
     <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
     order by : Relevance
  </MenuButton>
  <MenuList>
      <MenuItem>Relevance</MenuItem>
      <MenuItem>Date added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release Date</MenuItem>
      <MenuItem>popularity</MenuItem>
      <MenuItem>Average rating</MenuItem>
  </MenuList>
</Menu>
    </>
  )
}

export default SortSelector