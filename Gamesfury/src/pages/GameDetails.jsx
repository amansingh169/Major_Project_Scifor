import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameData, fetchGameScreenshots } from "../api/rawg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const GameDetails = () => {
  const [gameData, setGameData] = useState();
  const [gameScreenshots, setGameScreenshots] = useState([]);
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
      const storedData = localStorage.getItem(`game_${id}`);

      if (storedData) {
        setGameData(JSON.parse(storedData));
        console.log("Stored Game Data Fetched!");
      } else {
        const data = await fetchGameData(id);
        setGameData(data);
        console.log("Game Data Fetched from API!");
        localStorage.setItem(`game_${id}`, JSON.stringify(data));
      }

      const storedScreens = localStorage.getItem(`screenshots_${id}`);

      if (storedScreens) {
        setGameScreenshots(JSON.parse(storedScreens));
        console.log("Stored Screenshots Fetched!");
      } else {
        const data = await fetchGameScreenshots(id);
        setGameScreenshots(data);
        localStorage.setItem(`screenshots_${id}`, JSON.stringify(data));
        console.log("Screenshots Fetched from API!");
      }
    };

    getGameData();
  }, [id]);

  // console.log(gameData);

  if (!gameData) return <h2>Loading...</h2>;

  return (
    <div className="game-details-wrapper d-flex flex-column gap-4">
      <h1 className="my-0 lh-1">{`${gameData.name}`}</h1>

      <div className="rating d-flex gap-2">
        <div className="rating-stars d-flex align-items-center">
          <div className={`badge d-flex gap-2 ${getRatingBadgeClass(gameData.rating)}`}>
            <i className="bi bi-star-fill"></i>
            {gameData.rating}
          </div>
        </div>

        <div className="feedback">{formatFeedback(getFeedback(gameData.ratings))}</div>
      </div>

      <div className="game-details row">
        <div className="details-main col-9">
          <Splide options={{ type: "fade", rewind: true, gap: "1rem", autoplay: true }}>
            {gameScreenshots.map((ss) => (
              <SplideSlide key={ss.id}>
                <img className="splide-img" src={ss.image} alt="Image 1" />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="details-aside col-3 d-flex flex-column gap-2">
          <div className="d-flex">
            <div className="badge bg-secondary text-primary fw-bold">Base Game</div>
          </div>

          <div className="price d-flex align-items-baseline gap-2">
            <div className="discount badge">-33%</div>
            <div className="cut-price text-decoration-line-through">$23.99</div>
            <div className="final-price text-primary fw-bold fs-5">$16.49</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
