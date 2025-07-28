import Slider from "../components/Slider";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { fetchGames, fetchSteamGameData } from "../api/games";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import TopGamesSlider from "../components/TopGamesSlider";

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
        // const top6Games = discountedGames.slice(-17, -8);
        const enrichedTopGames = await Promise.all(
          discountedGames.map(async (g) => {
            const fullGame = await fetchSteamGameData(g.steam_appid);

            return {
              ...g,
              screenshots: fullGame?.screenshots || [],
              short_description: fullGame?.short_description || [],
            };
          })
        );

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
        className="d-md-none"
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

      <div className="d-none d-md-flex gap-3">
        <a href="#" className="card-wrapper banner-card">
          <img
            className="thumbnail img-thumbnail"
            src="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
            alt="Card"
          />
        </a>
        <a href="#" className="card-wrapper banner-card">
          <img
            className="thumbnail img-thumbnail"
            src="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
            alt="Card"
          />
        </a>
        <a href="#" className="card-wrapper banner-card">
          <img
            className="thumbnail img-thumbnail"
            src="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium"
            alt="Card"
          />
        </a>
      </div>

      <TopGamesSlider sliderGames={sliderGames} />

      <Slider gameList={games3} title="Popular Games" />
      <Slider gameList={discountedGames.slice().reverse()} title="Mega Sale Special" />
      <Slider gameList={games1} title="Old Is Gold" />

      <Footer />
    </div>
  );
};
export default Discover;
