import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { fetchGenreGameList } from "../api/games";
import GenreCard from "../components/GenreCard";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);
// do this later
const Browse = () => {
  const query = useQuery();
  const genre = query.get("genre");
  const [allGames, setAllGames] = useState([]);
  const availableGenres = [
    "action",
    "adventure",
    "casual",
    "earlyaccess",
    "free",
    "indie",
    "massivelymultiplayer",
    "racing",
    "rpg",
    "simulation",
    "sports",
    "strategy",
  ];

  useEffect(() => {
    const fetchGames = async () => {
      const storedGames = localStorage.getItem("exploreGameList") || "";

      if (storedGames) {
        setAllGames(JSON.parse(storedGames));
        console.log("Stored data fetched.", JSON.parse(storedGames));
      } else {
        const res = await fetchGenreGameList("rpg");
        console.log("API Fetched", res);
        setAllGames(res);

        localStorage.setItem("exploreGameList", JSON.stringify(res));
      }
    };

    fetchGames();
  }, []);

  if (!allGames) {
    <div className="d-flex align-items-center justify-content-center h-100">
      <h2>Loading...</h2>;
    </div>;
  }

  return (
    <div className="browse-wrapper">
      <div className="genre-slider">
        <h3>Popular Genres</h3>

        <Splide
          className="mt-3"
          options={{
            rewind: true,
            type: "loop",
            perPage: 4,
            gap: "1rem",
            pagination: false,
          }}
        >
          {availableGenres.map((genre) => (
            <GenreCard key={genre} genre={genre} />
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Browse;
