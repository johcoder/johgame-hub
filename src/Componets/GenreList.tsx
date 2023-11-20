
import { Button, Card, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import croppedUrlImage from "../services/image-url";
  import useGenres, { Genre } from "../Hooks/useGenres";

interface props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: props) => {
  const { data,isLoading } = useGenres();
  if(isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY= "5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={croppedUrlImage(genre.image_background)}
            />
            <Button onClick={()=> onSelectGenre(genre)}  fontSize= "lg" variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
