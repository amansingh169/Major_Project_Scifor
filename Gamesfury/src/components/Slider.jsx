import Card from "./Card";
import { useRef } from "react";

const Slider = () => {
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
        <Card
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
        <Card
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="a"
        />
      </div>
    </div>
  );
};

export default Slider;
