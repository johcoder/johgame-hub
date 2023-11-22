import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface  props{
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: props) => {
   const ref= useRef<HTMLInputElement>(null)
  return (
    <form id="form" onSubmit={(event) =>{
        event.preventDefault()
        if(ref.current) onSearch(ref.current.value);
    } 
    }>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="search games...."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
function ref<T>(arg0: null) {
    throw new Error("Function not implemented.");
}

