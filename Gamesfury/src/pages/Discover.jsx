import Card from "../components/Card";
import Slider from "../components/Slider";

import { fetchPopularGames, fetchNewGames } from "../api/rawg";
import { useEffect, useState } from "react";

const Discover = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    const getGames = async () => {
      const storedData = localStorage.getItem("newGamesData") || "";

      if (storedData) {
        setGames(JSON.parse(storedData));
        console.log("Stored Data Fetched!");
      } else {
        const data = await fetchNewGames();
        setGames(data);
        console.log("API Fetched!");
        localStorage.setItem("newGamesData", JSON.stringify(gamesWithPrices));
      }
    };

    getGames();
  }, []);

  console.log(games);

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex gap-3">
        <Card img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium" />
        <Card img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium" />
        <Card img="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium" />
      </div>

      <Slider games={games || []} />
    </div>
  );
};

export default Discover;
