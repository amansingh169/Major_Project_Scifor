import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchGameData } from "../api/rawg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const GameDetails = () => {
  const { state } = useLocation();
  const passedGameData = state?.game;

  const [gameData, setGameData] = useState();
  const { slugId } = useParams();
  const id = slugId.split("-").pop();

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

  const getPlatformIconClass = (slug) => {
    if (slug == "pc") {
      return "bi-windows";
    }
    if (slug == "playstation") {
      return "bi-playstation";
    }
    if (slug == "xbox") {
      return "bi-xbox";
    }
    if (slug == "mac") {
      return "bi-apple";
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
    };

    getGameData();
  }, [id]);

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
            {passedGameData.short_screenshots.map((ss) => (
              <SplideSlide key={ss.id}>
                <div className="blur-bg">
                  <img src={ss.image} alt="Image 1" />
                </div>
                <img className="splide-img" src={ss.image} alt="Image 1" />
              </SplideSlide>
            ))}
          </Splide>

          <div style={{ height: "500px" }}></div>
        </div>

        <div className="details-aside col-3">
          <div
            className="details-aside-content d-flex flex-column gap-3"
            style={{ top: document.querySelector(".header").clientHeight }}
          >
            <div className="d-flex">
              <div className="badge bg-secondary text-primary fw-bold">Base Game</div>
            </div>

            <div className="price d-flex align-items-baseline gap-2">
              <div className="discount badge">-33%</div>
              <div className="cut-price text-decoration-line-through">$23.99</div>
              <div className="final-price text-primary fw-bold fs-5">$16.49</div>
            </div>

            <div className="d-flex flex-column gap-2">
              <button className="buy-btn btn btn-primary rounded-10 fw-semibold">Buy Now</button>
              <button className="buy-btn btn btn-secondary rounded-10">Add to Cart</button>
              <button className="buy-btn btn btn-secondary rounded-10">Add to Wishlist</button>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div>Epic Rewards</div>
                <div className="text-primary">Earn 20% Back</div>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div>Refund Type</div>
                <div className="text-primary">Self-Refundable</div>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div>Developer</div>
                <div className="text-primary">{gameData.developers[0].name}</div>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div>Publisher</div>
                <div className="text-primary">{gameData.publishers[0].name}</div>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div>Release Date</div>
                <div className="text-primary">{gameData.released}</div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent text-muted fw-semibold">
                <div>Platform</div>

                <div className="text-primary d-flex gap-2">
                  {gameData.parent_platforms.map((p) => (
                    <i
                      key={p.platform.id}
                      className={`bi ${getPlatformIconClass(p.platform.slug)}`}
                    ></i>
                  ))}
                </div>
              </li>
            </ul>

            <div className="share-report d-flex gap-2">
              <button className="share-btn btn btn-secondary rounded py-1 w-50">
                <i className="bi bi-share"></i>&nbsp; Share
              </button>
              <button className="report-btn btn btn-secondary rounded py-1 w-50">
                <i className="bi bi-flag"></i>&nbsp; Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
