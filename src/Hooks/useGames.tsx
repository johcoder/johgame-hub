import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";
export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Games>(
    "/games",
    { params: { genres: selectedGenre?.id, platform: selectedPlatform?.id } },
    [selectedGenre?.id,selectedPlatform?.id]
  );
export default useGames;
