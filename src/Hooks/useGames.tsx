import { GameQuery } from "../App";
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
  gamequery: GameQuery
) =>
  useData<Games>(
    "/games",
    { params: { genres: gamequery.genre?.id, platform: gamequery.platform?.id } },
    [gamequery]
  );
export default useGames;
