import { useState, useEffect } from "react";
import { fetchGenreGameList } from "../api/games";

const Browse = () => {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const storedGames = localStorage.getItem("exploreGameList") || "";

      if (storedGames) {
        setAllGames(JSON.parse(storedGames));
        console.log("Stored data fetched.");
      } else {
        const res = await fetchGenreGameList("rpg");
        console.log("API Fetched", res.slice(101, 151));
        setAllGames(res);

        localStorage.setItem("exploreGameList", JSON.stringify(res));
      }
    };

    fetchGames();
  }, []);

  if (allGames === null)
    return (
      <div className="d-flex align-items-center justify-content-center h-100">
        <h2>Loading...</h2>;
      </div>
    );

  return (
    <>
      <p>Here is your data.</p>
    </>
  );
};

export default Browse;
