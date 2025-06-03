import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchNewGames, fetchPopularGames, fetchDiscountedGames } from "../api/rawg";

const Slider = ({ gameListType }) => {
  const sliderRef = useRef();
  const [games, setGames] = useState([]);

  const scroll = (offset) => {
    sliderRef.current.scrollBy({ left: offset, behaviour: "smooth" });
  };

  useEffect(() => {
    const getNewGames = async () => {
      const storedData = localStorage.getItem("newGamesData") || "";

      if (storedData) {
        setGames(JSON.parse(storedData));
        console.log("Stored Data Fetched!");
      } else {
        const data = await fetchNewGames();
        setGames(data);
        console.log("API Fetched!");
        localStorage.setItem("newGamesData", JSON.stringify(data));
      }
    };

    const getPopularGames = async () => {
      const storedData = localStorage.getItem("popularGamesData") || "";

      if (storedData) {
        setGames(JSON.parse(storedData));
        console.log("Stored Data Fetched!");
      } else {
        const data = await fetchPopularGames();
        setGames(data);
        console.log("API Fetched!");
        localStorage.setItem("popularGamesData", JSON.stringify(data));
      }
    };

    const getDiscountedGames = async () => {
      const storedData = localStorage.getItem("discountedGamesData") || "";

      if (storedData) {
        setGames(JSON.parse(storedData));
        console.log("Stored Data Fetched!");
      } else {
        const data = await fetchDiscountedGames();
        setGames(data);
        console.log("API Fetched!");
        localStorage.setItem("discountedGamesData", JSON.stringify(data));
      }
    };

    switch (gameListType) {
      case "new_games":
        getNewGames();
        break;

      case "popular_games":
        getPopularGames();
        break;

      case "discounted_games":
        getDiscountedGames();
        break;

      default:
        break;
    }
  }, []);

  console.log(games);

  return (
    <div className="game-slider">
      <div className="slider-header d-flex align-items-center my-4">
        <a href="#" className="d-flex">
          <h3>
            {gameListType === "new_games"
              ? "Discover Something New"
              : gameListType === "popular_games"
              ? "Most Popular"
              : gameListType === "discounted_games"
              ? "Mega Sale Special"
              : "Game Slider"}
          </h3>
          <i className="bi bi-chevron-right fs-4 text-primary ms-2"></i>
        </a>

        <div className="slider-nav gap-2 ms-auto d-none d-md-flex">
          <button onClick={() => scroll(-500)} className="text-primary">
            <i className="bi bi-chevron-left fs-6 text-primary"></i>
          </button>

          <button onClick={() => scroll(500)} className="text-primary">
            <i className="bi bi-chevron-right fs-6 text-primary"></i>
          </button>
        </div>
      </div>

      <div className="slider-container d-flex gap-3" ref={sliderRef}>
        {games.map((game) => (
          <Link to={`/game/${game.slug}-${game.id}/`} key={game.id} state={{ game }}>
            <Card
              gameInfo={game}
              discountedGame={gameListType === "discounted_games" ? true : false}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
