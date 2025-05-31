import Card from "./Card";
import { useRef } from "react";

// edit this comp to make it show the game cards correctly

const Slider = ({ games }) => {
  const sliderRef = useRef();

  const scroll = (offset) => {
    sliderRef.current.scrollBy({ left: offset, behaviour: "smooth" });
  };

  return (
    <div className="game-slider">
      <div className="slider-header d-flex align-items-center my-4">
        <a href="#" className="d-flex">
          <h3>Discover Something New</h3>
          <i className="bi bi-chevron-right fs-4 text-primary ms-2"></i>
        </a>

        <div className="slider-nav d-flex gap-2 ms-auto">
          <button onClick={() => scroll(-1500)} className="text-primary">
            <i className="bi bi-chevron-left fs-6 text-primary"></i>
          </button>

          <button onClick={() => scroll(1500)} className="text-primary">
            <i className="bi bi-chevron-right fs-6 text-primary"></i>
          </button>
        </div>
      </div>

      <div className="slider-container d-flex gap-3" ref={sliderRef}>
        {games.map((game) => (
          <Card key={game.id} gameInfo={game} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
