import Card from "./Card";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Slider = ({ gameList, title }) => {
  const sliderRef = useRef();

  const scroll = (offset) => {
    sliderRef.current.scrollBy({ left: offset, behaviour: "smooth" });
  };

  return (
    <div className="game-slider">
      <div className="slider-header d-flex align-items-center my-4">
        <a href="#" className="d-flex">
          <h3>{title}</h3>
          <i className="bi bi-chevron-right fs-4 text-primary ms-2"></i>
        </a>

        <div className="slider-nav gap-2 ms-auto d-none d-md-flex">
          <button onClick={() => scroll(-700)} className="text-primary">
            <i className="bi bi-chevron-left fs-6 text-primary"></i>
          </button>

          <button onClick={() => scroll(700)} className="text-primary">
            <i className="bi bi-chevron-right fs-6 text-primary"></i>
          </button>
        </div>
      </div>

      <div className="slider-container d-flex gap-3" ref={sliderRef}>
        {gameList.map(
          (game) => game && <Card key={game.steam_appid} gameInfo={game} slider={true} />
        )}
      </div>
    </div>
  );
};

export default Slider;
