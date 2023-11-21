import { Menu, MenuButton, Button, MenuList, MenuItem, ListItem } from "@chakra-ui/react"
import {BsChevronDown} from "react-icons/bs"
import usePlatforms, { Platform } from "../Hooks/usePlatform"

interface props{
    onSelectedPlatform: (platform: Platform) => void;
    selectedplatform: Platform | null;
}
const PlatformSelector = ({onSelectedPlatform,selectedplatform}: props) => {
    const{data,error} =usePlatforms();
    if(error) return null;
  return (
    <>
     <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
   {selectedplatform?.name || "Platform"}
  </MenuButton>
  <MenuList>
    {data.map(platform => <MenuItem onClick={()=> onSelectedPlatform(platform) } key={platform.id}>{platform.name}</MenuItem>)}
  </MenuList>
</Menu>
    </>
   
  )
}

export default PlatformSelector