import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { fetchAllGames, fetchGenreGameList } from "../api/games";
import GenreCard from "../components/GenreCard";
import SortBy from "../components/SortBy";
import Filters from "../components/Filters";
import Card from "../components/Card";

const useQuery = () => new URLSearchParams(useLocation().search);

const Browse = () => {
  const query = useQuery();
  const genre = query.get("genre");
  const [allGames, setAllGames] = useState([]);
  const availableGenres = [
    { name: "Action", slug: "action" },
    { name: "Adventure", slug: "adventure" },
    { name: "Casual", slug: "casual" },
    { name: "Early Access", slug: "earlyaccess" },
    { name: "Free", slug: "free" },
    { name: "Indie", slug: "indie" },
    { name: "Massively Multiplayer", slug: "massivelymultiplayer" },
    { name: "Racing", slug: "racing" },
    { name: "RPG", slug: "rpg" },
    { name: "Simulation", slug: "simulation" },
    { name: "Sports", slug: "sports" },
    { name: "Strategy", slug: "strategy" },
  ];

  useEffect(() => {
    const fetchGames = async () => {
      const storedGames = localStorage.getItem("exploreGameList") || "";

      if (storedGames) {
        setAllGames(JSON.parse(storedGames));
        console.log("Stored data fetched.", JSON.parse(storedGames));
      } else {
        const res = await fetchAllGames();
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
      <div className="genre-slider mt-4">
        <h3>Popular Genres</h3>

        <div className="d-none d-xl-block">
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
              <GenreCard key={genre.slug} genre={genre} />
            ))}
          </Splide>
        </div>

        <div className="d-none d-md-block d-xl-none">
          <Splide
            className="mt-3"
            options={{
              rewind: true,
              type: "loop",
              perPage: 3,
              gap: "1rem",
              pagination: false,
            }}
          >
            {availableGenres.map((genre) => (
              <GenreCard key={genre.slug} genre={genre} />
            ))}
          </Splide>
        </div>

        <div className="d-block d-md-none">
          <Splide
            className="mt-3"
            options={{
              rewind: true,
              type: "loop",
              perPage: 2,
              gap: "1rem",
              padding: "4rem",
              pagination: false,
              arrows: false,
            }}
          >
            {availableGenres.map((genre) => (
              <GenreCard key={genre.slug} genre={genre} />
            ))}
          </Splide>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-10">
          <SortBy />

          {allGames.map((g) => (
            <Link key={g.steam_appid} to={`/game/${g.steam_appid}`}>
              <Card gameInfo={g} />
            </Link>
          ))}
        </div>
        <div className="col-2">
          <h4 className="mb-4">Filters</h4>
          <Filters />
        </div>
      </div>
    </div>
  );
};
export default Browse;
