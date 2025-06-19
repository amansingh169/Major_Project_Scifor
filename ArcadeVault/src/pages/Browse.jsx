import { useEffect } from "react";
import { fetchSteamSpyGenreGames } from "../api/games";

const Browse = () => {
  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetchSteamSpyGenreGames("action");
      console.log(res.slice(51, 101));
    };

    fetchGames();
  }, []);

  return <h1>Search for games here!</h1>;
};

export default Browse;
