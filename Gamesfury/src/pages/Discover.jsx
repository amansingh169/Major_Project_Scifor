import Card from "../components/Card";
import Slider from "../components/Slider";
import { fetchGames } from "../api/games";
import { useEffect, useState } from "react";

const Discover = () => {
  const [games, setGames] = useState([]);
  const [discountedGames, setDiscountedGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const storedData = localStorage.getItem("gamesData") || "";
      const storedDiscountedGames = localStorage.getItem("discountedGamesData") || "";

      if (storedData && storedDiscountedGames) {
        setGames(JSON.parse(storedData));
        setDiscountedGames(JSON.parse(storedDiscountedGames));
        console.log("Stored Data Fetched!");
      } else {
        const data = await fetchGames();
        console.log("API Fetched!");

        setGames(data);
        const discountedGames = data.filter((game) => game?.price?.discount_percent > 0);
        setDiscountedGames(discountedGames);

        localStorage.setItem("gamesData", JSON.stringify(data));
        localStorage.setItem("discountedGamesData", JSON.stringify(discountedGames));
      }
    };

    getGames();
  }, []);

  const third = Math.ceil(games.length / 3);
  const games1 = games?.slice(0, third);
  const games2 = games?.slice(third, 2 * third);
  const games3 = games?.slice(2 * third);

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex gap-3">
        <a href="#" className="card-wrapper">
          <img
            className="thumbnail img-thumbnail"
            src="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
            alt="Card"
          />
        </a>
        <a href="#" className="card-wrapper">
          <img
            className="thumbnail img-thumbnail"
            src="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
            alt="Card"
          />
        </a>
        <a href="#" className="card-wrapper">
          <img
            className="thumbnail img-thumbnail"
            src="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium"
            alt="Card"
          />
        </a>
      </div>

      <Slider gameList={games2.slice().reverse()} title="Popular Games" />
      <Slider gameList={discountedGames.slice().reverse()} title="Mega Sale Special" />
      <Slider gameList={games1} title="Old Is Gold" />
    </div>
  );
};

export default Discover;
