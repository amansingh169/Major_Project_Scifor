import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import addToWishlist from "../utils/addToWishlist";
import PriceOverview from "../components/PriceOverview";

const TopGamesSlider = ({ sliderGames }) => {
  return (
    <div className="top-games-slider">
      <div className="d-none d-xl-block">
        <Splide
          options={{
            type: "fade",
            rewind: true,
            gap: "1rem",
            autoplay: true,
            arrows: true,
            pagination: true,
          }}
        >
          {sliderGames.map((game) => (
            <SplideSlide key={game.steam_appid}>
              <div className="game-slide">
                <div className="gradient"></div>

                <div className="game-slide-content">
                  <Link to={`/game/${game.steam_appid}`}>
                    <img
                      className="game-logo"
                      height={200}
                      src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game?.steam_appid}/logo.png`}
                      alt={game.name}
                    />
                  </Link>
                  <p className="fw-semibold text-success">
                    <i className="bi bi-circle-fill fs-7"></i>&nbsp; Live MEGA SALE
                  </p>
                  <p className="text-primary">{game.short_description}</p>
                  <PriceOverview price_overview={game.price_overview} fs="5" />
                  <div className="d-flex gap-2 mt-2">
                    <button className="btn btn-primary fw-bold">Buy Now</button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToWishlist(game, setUser);
                      }}
                      className="btn btn-secondary"
                    >
                      <i className="bi bi-plus-circle"></i>&nbsp; Add to Wishlist
                    </button>
                  </div>
                </div>

                <img className="splide-img" src={game?.screenshots[4].path_full} alt="Screenshot" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="d-xl-none">
        <Splide
          options={{
            type: "fade",
            rewind: true,
            gap: "1rem",
            arrows: false,
            autoplay: true,
            pagination: true,
          }}
        >
          {sliderGames.map((game) => (
            <SplideSlide key={game.steam_appid}>
              <Link to={`/game/${game.steam_appid}`} className="game-slide game-slide-small">
                <div className="gradient"></div>
                <img
                  className="game-logo"
                  src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game?.steam_appid}/logo.png`}
                  alt={game.name}
                />
                <div className="game-slide-content">
                  <p className="fw-semibold text-accent my-2">• Live MEGA SALE</p>
                  <PriceOverview price_overview={game.price_overview} fs="6" />
                  <p className="game-des text-primary my-2">{game.short_description}</p>
                </div>

                <img className="splide-img" src={game?.screenshots[4].path_full} alt="Screenshot" />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopGamesSlider;
