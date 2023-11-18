import React from "react";
import apiClient from "../services/api-client";
import useGenres from "../Hooks/useGenres";
import { Card, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import croppedUrlImage from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY= "5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={croppedUrlImage(genre.image_background)}
            />
            <Text fontSize= "lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
