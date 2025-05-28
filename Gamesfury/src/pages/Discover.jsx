import Banner from "../components/Banner/Banner";
import Card from "../components/Card";
import ThemeSelector from "../components/ThemeSelector";

const Discover = () => {
  return (
    <div>
      <div className="d-flex gap-3">
        <Banner
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-ms-banner-asset-1920x1080-32a2d144ab4d.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="hey"
        />
        <Banner
          img="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-7dfda25a88fe.avif?resize=1&w=854&h=480&quality=medium"
          gameInfo="hey"
        />
        <Banner
          img="https://cdn2.unrealengine.com/en-mega-sale-3up-fg-banner-asset-1920x1080-615c6807a1ad.jpg?resize=1&w=854&h=480&quality=medium"
          gameInfo="hey"
        />
      </div>
      <Card />
      <ThemeSelector />
    </div>
  );
};

export default Discover;
