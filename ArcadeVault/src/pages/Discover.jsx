import Slider from "../components/Slider";
import PriceOverview from "../components/PriceOverview";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { fetchGames, fetchSteamGameData } from "../api/games";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Discover = () => {
  const [games, setGames] = useState([]);
  const [discountedGames, setDiscountedGames] = useState([]);
  const [sliderGames, setsliderGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const storedData = localStorage.getItem("gamesData") || "";
      const storedDiscountedGames = localStorage.getItem("discountedGamesData") || "";
      const storedSliderGames = localStorage.getItem("sliderGames") || "";

      if (storedData && storedDiscountedGames && storedSliderGames) {
        setGames(JSON.parse(storedData));
        setDiscountedGames(JSON.parse(storedDiscountedGames));
        setsliderGames(JSON.parse(storedSliderGames));
      } else {
        const data = await fetchGames();
        const discountedGames = data.filter((game) => game?.price_overview?.discount_percent > 0);
        const top6Games = discountedGames.slice(-8);
        console.log(top6Games);
        const enrichedTopGames = await Promise.all(
          top6Games.map(async (g) => {
            const fullGame = await fetchSteamGameData(g.steam_appid);

            return {
              ...g,
              screenshots: fullGame?.screenshots || [],
              short_description: fullGame?.short_description || [],
            };
          })
        );
        console.log(enrichedTopGames);

        setGames(data);
        setDiscountedGames(discountedGames);
        setsliderGames(enrichedTopGames);

        localStorage.setItem("gamesData", JSON.stringify(data));
        localStorage.setItem("discountedGamesData", JSON.stringify(discountedGames));
        localStorage.setItem("sliderGames", JSON.stringify(enrichedTopGames));
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
      <Splide
        className="d-lg-none"
        options={{
          type: "loop",
          rewind: true,
          gap: "1rem",
          autoplay: true,
          lazyLoad: "nearby",
          arrows: false,
          pagination: true,
        }}
      >
        <SplideSlide>
          <img
            className="splide-img"
            src="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
            alt="Screenshot"
          />
        </SplideSlide>

        <SplideSlide>
          <img
            className="splide-img"
            src="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
            alt="Screenshot"
          />
        </SplideSlide>

        <SplideSlide>
          <img
            className="splide-img"
            src="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium"
            alt="Screenshot"
          />
        </SplideSlide>
      </Splide>

      <div className="d-none d-lg-flex gap-3">
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
                <Link className="game-slide">
                  <div className="gradient"></div>

                  <div className="game-slide-content">
                    <img
                      className="game-logo"
                      height={200}
                      src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game?.steam_appid}/logo.png`}
                      alt={game.name}
                    />
                    <p className="fw-semibold text-accent">• Live MEGA SALE</p>
                    <p className="text-primary">{game.short_description}</p>
                    <PriceOverview price_overview={game.price_overview} fs="5" />
                    <div className="d-flex gap-2 mt-2">
                      <button className="btn btn-primary fw-bold">Buy Now</button>
                      <div className="btn btn-secondary">
                        <i className="bi bi-plus-circle"></i>&nbsp; Add to Wishlist
                      </div>
                    </div>
                  </div>

                  <img
                    className="splide-img"
                    src={game?.screenshots[5].path_full}
                    alt="Screenshot"
                  />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="d-xl-none">
          <Splide
            options={{
              type: "loop",
              rewind: true,
              gap: "1rem",
              autoplay: true,
              pagination: true,
            }}
          >
            {sliderGames.map((game) => (
              <SplideSlide key={game.steam_appid}>
                <Link className="game-slide game-slide-small">
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

                  <img
                    className="splide-img"
                    src={game?.screenshots[5].path_full}
                    alt="Screenshot"
                  />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <Slider gameList={games3.slice().reverse()} title="Popular Games" />
      <Slider gameList={discountedGames.slice().reverse()} title="Mega Sale Special" />
      <Slider gameList={games1} title="Old Is Gold" />

      <Footer />
    </div>
  );
};
export default Discover;
