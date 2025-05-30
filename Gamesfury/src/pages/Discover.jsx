import Card from "../components/Card";
import Slider from "../components/Slider";

const Discover = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex gap-3">
        <Card img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium" />
        <Card img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium" />
        <Card img="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium" />
      </div>

      <Slider />
    </div>
  );
};

export default Discover;
