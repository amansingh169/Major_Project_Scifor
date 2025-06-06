import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchSteamGameData } from "../api/games";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const GameDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const userReviews = {
    positive: state?.positive,
    negative: state?.negative,
  };
  const [gameData, setGameData] = useState();
  const feedback = getReviewSummary(state.positive, state.negative);

  function getReviewSummary(positive, negative) {
    const total = positive + negative;
    const percent = (positive / total) * 100;

    const icon =
      percent > 70
        ? "bi-hand-thumbs-up-fill text-success"
        : percent > 40
        ? "bi-hand-thumbs-up-fill text-warning"
        : "bi-hand-thumbs-down-fill text-danger";

    const message =
      percent >= 95
        ? "Overwhelmingly Positive"
        : percent >= 85
        ? "Very Positive"
        : percent >= 80
        ? "Mostly Positive"
        : percent >= 70
        ? "Positive"
        : percent >= 40
        ? "Mixed"
        : percent >= 20
        ? "Mostly Negative"
        : percent >= 10
        ? "Very Negative"
        : "Overwhelmingly Negative";

    if (total === 0) return { total: 0, message: "No Reviews yet" };
    return { total: total, icon: icon, message: message };
  }

  useEffect(() => {
    const getGameData = async () => {
      const storedData = sessionStorage.getItem(`game_${id}`);

      if (storedData) {
        setGameData(JSON.parse(storedData));
        console.log("Stored Game Data Fetched!");
        // console.log(gameData);
      } else {
        const data = await fetchSteamGameData(id);
        setGameData(data);
        console.log("Game Data Fetched from API!");
        console.log(data);
        sessionStorage.setItem(`game_${id}`, JSON.stringify(data));
      }
    };

    getGameData();
  }, [id]);

  if (!gameData) return <h2>Loading...</h2>;

  return (
    <div className="game-details-wrapper d-flex flex-column gap-4">
      <h1 className="my-0 lh-1">{`${gameData.name}`}</h1>

      <div className="feedback d-flex align-items-baseline gap-2">
        <i className={`bi ${feedback.icon} fs-4`}></i>
        <p className="text-primary m-0 fs-5">{`${feedback.message}`} </p>
        <p className="m-0">{`(${feedback.total.toLocaleString()} Reviews)`}</p>
      </div>

      <div className="game-details row">
        <div className="details-main col-9">
          {gameData?.screenshots ? (
            <Splide options={{ type: "fade", rewind: true, gap: "1rem", autoplay: true }}>
              {gameData.screenshots.map((ss) => (
                <SplideSlide key={ss.id}>
                  <div className="blur-bg">
                    <img src={ss.path_thumbnail} alt="Screenshot" />
                  </div>
                  <img className="splide-img" src={ss.path_full} alt="Screenshot" />
                </SplideSlide>
              ))}
            </Splide>
          ) : (
            <div className="no-screenshots">No screenshots available</div>
          )}

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

            {gameData.is_free ? (
              <div className="final-price text-primary fw-bold fs-5">Free To Play</div>
            ) : gameData.price_overview ? (
              <div className="price d-flex align-items-baseline gap-2">
                {gameData.price_overview.discount_percent > 0 ? (
                  <>
                    <div className="discount badge">{`-${gameData.price_overview.discount_percent}%`}</div>
                    <div className="cut-price text-decoration-line-through">
                      {`${gameData.price_overview.initial_formatted}`}
                    </div>
                    <div className="final-price text-primary fw-bold fs-5">{`${gameData.price_overview.final_formatted}`}</div>
                  </>
                ) : (
                  <div className="final-price text-primary fw-bold fs-5">{`${gameData.price_overview.final_formatted}`}</div>
                )}
              </div>
            ) : (
              <div>Price Unavailable</div>
            )}

            <div className="d-flex flex-column gap-2">
              <button className="buy-btn btn btn-primary rounded-10 fw-semibold">
                {`${gameData.is_free ? "Get Now" : "Buy Now"}`}
              </button>
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
                <div className="col-6">Developer</div>
                <div className="text-primary col-6 text-end">{gameData.developers.join(", ")}</div>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div className="col-6">Publisher</div>
                <div className="text-primary col-6 text-end">{gameData.publishers.join(", ")}</div>
              </li>
              <li className="list-group-item d-flex justify-content-between px-0 bg-transparent text-muted fw-semibold">
                <div>Release Date</div>
                <div className="text-primary">{gameData.release_date.date}</div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent text-muted fw-semibold">
                <div>Platform</div>

                <div className="text-primary d-flex gap-2">
                  <i className={`bi ${gameData.platforms.linux && "bi-tux"}`}></i>
                  <i className={`bi ${gameData.platforms.mac && "bi-apple"}`}></i>
                  <i className={`bi ${gameData.platforms.windows && "bi-windows"}`}></i>
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
