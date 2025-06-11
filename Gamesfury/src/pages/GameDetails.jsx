import { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import { fetchSteamGameData } from "../api/games";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { UserContext } from "../contexts/UserContext";
import "@splidejs/splide/dist/css/splide.min.css";
import addToLibrary from "../utils/addToLibrary";

const GameDetails = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const [gameData, setGameData] = useState();
  const [isInLib, setIsInLib] = useState(false);
  const feedback = getReviewSummary(gameData?.recommendations?.total);

  const logo = `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameData?.steam_appid}/logo.png`;

  function getReviewSummary(recCount) {
    if (recCount >= 500000)
      return { message: "Overwhelmingly Positive", icon: "bi-hand-thumbs-up-fill text-success" };
    if (recCount >= 100000)
      return { message: "Very Positive", icon: "bi-hand-thumbs-up-fill text-success" };
    if (recCount >= 10000)
      return { message: "Positive", icon: "bi-hand-thumbs-up-fill text-warning" };
    if (recCount >= 1000) return { message: "Mixed", icon: "bi-hand-thumbs-up-fill text-warning" };
    if (recCount >= 100)
      return { message: "Mostly Negative", icon: "bi-hand-thumbs-up-fill text-danger" };
    if (recCount > 0)
      return { message: "Very Negative", icon: "bi-hand-thumbs-up-fill text-danger" };
    return { message: "No Recommendations", icon: "text-muted" };
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

  useEffect(() => {
    if (user?.collections && gameData) {
      setIsInLib(user?.collections.all.some((game) => game.appId === gameData?.steam_appid));
    }
  }, [gameData]);

  if (!gameData) return <h2>Loading...</h2>;

  return (
    <div className="game-details-wrapper d-flex flex-column gap-4">
      <h1 className="my-0 lh-1">{`${gameData.name}`}</h1>

      <div className="feedback d-flex align-items-baseline gap-2">
        <i className={`bi ${feedback.icon} fs-4`}></i>
        <p className="text-primary m-0 fs-5">{`${feedback.message}`} </p>
        <p className="m-0">{`(${
          gameData.recommendations?.total.toLocaleString() || 0
        } Recommendations)`}</p>
      </div>

      <div className="game-details row">
        <div className="details-main col-9">
          {gameData?.screenshots ? (
            <Splide options={{ rewind: true, gap: "1rem", autoplay: true, lazyLoad: "nearby" }}>
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

          {/* <div style={{ height: "500px" }}></div> */}

          <div
            className="mt-4 m-auto"
            //  style={{ maxWidth: "800px", marginInline: "auto" }}
          >
            <div className="description">
              <h3 className="lh-1">Description</h3>
              <hr />

              <div
                id="game-description"
                className="game-description"
                dangerouslySetInnerHTML={{ __html: gameData.about_the_game }}
              />
            </div>
          </div>
        </div>

        <div className="details-aside col-3">
          <div
            className="details-aside-content d-flex flex-column gap-3"
            style={{ top: document.querySelector(".header").clientHeight }}
          >
            <div className="aside-header-img">
              <img src={logo} alt={gameData.name} className="img-thumbnail w-100" />
            </div>

            <div className="d-flex">
              <div className="badge bg-secondary text-primary fw-bold">
                {gameData.type === "game" ? "Base Game" : "DLC (Downloadable Content)"}
              </div>
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
              {isInLib ? (
                <button
                  onClick={() => navigate("/library")}
                  className="buy-btn btn btn-primary rounded-10 fw-semibold d-flex justify-content-center align-items-center gap-2"
                >
                  <i className="bi bi-grid fs-5"></i>
                  <p className="m-0">In Library</p>
                </button>
              ) : (
                <button
                  onClick={() => addToLibrary(gameData, setUser, setIsInLib)}
                  className="buy-btn btn btn-primary rounded-10 fw-semibold"
                >
                  {`${gameData.is_free ? "Get Now" : "Buy Now"}`}
                </button>
              )}
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

      <div className="col-9">
        // fix these
        <div className="description mt-4 bg-dark rounded-10 p-4">
          <h3 className="lh-1">Content Description</h3>
          <hr />

          <div id="content-descriptors" className="content-descriptors">
            The developers describe the content like this:
            <br />
            <br />
            <i>{gameData?.content_descriptors?.notes || "No content descriptors available..."}</i>
          </div>
        </div>
        <div className="description system-req mt-4 bg-dark rounded-10 p-4">
          <h3 className="lh-1">System Requirements</h3>
          <hr />

          <div id="pc-requirements" className="pc-requirements d-flex gap-2">
            <div className="w-50">
              <div
                className="min-specs"
                dangerouslySetInnerHTML={{ __html: gameData.pc_requirements.minimum }}
              />
            </div>

            <div className="w-50">
              <div
                className="rec-specs"
                dangerouslySetInnerHTML={{ __html: gameData.pc_requirements.recommended }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
