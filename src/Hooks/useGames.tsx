import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
export interface platform{
  id:number;
  name:string;
  slug: string;
}
export interface  Games{
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform: platform}[];
    metacritic: number;
}




const useGames = (selectedGenre: Genre | null) => useData<Games>("/games",{params: {genres: selectedGenre?.id}},[selectedGenre?.id])
 export default useGames; 