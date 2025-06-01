import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameData } from "../api/rawg";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const GameDetails = () => {
  const [gameData, setGameData] = useState();
  const { id } = useParams();

  const getRatingBadgeClass = (rating) => {
    if (rating >= 4.3) return "bg-success";
    if (rating >= 3.7) return "bg-primary";
    if (rating >= 2.8) return "bg-warning";
    if (rating >= 0) return "bg-danger";
    return "bg-secondary";
  };

  function getFeedback(ratings) {
    if (!ratings || ratings.length === 0) return "No feedback";

    const top = ratings.reduce((prev, curr) => (curr.count > prev.count ? curr : prev));

    return top.title;
  }

  const formatFeedback = (title) => {
    switch (getFeedback(gameData.ratings)) {
      case "skip":
        return "🛑 Skip";
      case "meh":
        return "😐 Meh";
      case "recommended":
        return "👍 Recommended";
      case "exceptional":
        return "🌟 Exceptional";
      default:
        return title;
    }
  };

  useEffect(() => {
    const getGameData = async () => {
      const storedData = localStorage.getItem(`storedGame_${id}`);

      if (storedData) {
        setGameData(JSON.parse(storedData));
        console.log("Stored Game Data Fetched!");
      } else {
        const data = await fetchGameData(id);
        setGameData(data);
        console.log("Game Data Fetched from API!");
        localStorage.setItem(`storedGame_${id}`, JSON.stringify(data));
      }
    };

    getGameData();
  }, []);

  console.log(gameData);

  if (!gameData) return <h2>Loading...</h2>;

  return (
    <div className="game-details-wrapper d-flex flex-column">
      <h1>{`${gameData.name}`}</h1>

      <div className="rating d-flex gap-3">
        <div className="rating-stars d-flex align-items-center">
          <div className={`badge d-flex gap-2 ${getRatingBadgeClass(gameData.rating)}`}>
            <i className="bi bi-star-fill"></i>
            {gameData.rating}
          </div>
        </div>
        <div className="feedback">{formatFeedback(getFeedback(gameData.ratings))}</div>
      </div>

      <div className="game-details d-flex flex-column">
        <div className="details-main">
          <Splide options={{ type: "fade", rewind: true, gap: "1rem", autoplay: true }}>
            {gameData.thumbnmails}
            <SplideSlide>
              <img
                className="splide-img"
                src="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
                alt="Image 1"
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="details-aside"></div>
      </div>
    </div>
  );
};

export default GameDetails;
