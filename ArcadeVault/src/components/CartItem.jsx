import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getGameType } from "../utils/formatGameContent";
import { Link } from "react-router-dom";
import PegiRating from "../components/PegiRating";
import PriceOverview from "../components/PriceOverview";
import removeItem from "../utils/removeItem";
import addToCart from "../utils/addToCart";
import addToWishlist from "../utils/addToWishlist";

const CartItem = ({ game, inWishlist = false }) => {
  const { setUser } = useContext(UserContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      addToCart(game, setUser);
      removeItem(game, setUser, "wishlist");
    } catch (err) {
      document.write(err);
    }
  };

  const handleMoveToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      addToWishlist(game, setUser);
      removeItem(game, setUser, "cart");
    } catch (err) {
      document.write(err);
    }
  };

  return (
    <div key={game.steam_appid} className="cart-item bg-card p-3 rounded-4">
      <div className="d-flex gap-3 mb-2 flex-column flex-sm-row">
        <Link to={`/game/${game.steam_appid}`} className="cart-game-img">
          <img src={game.header_image} alt={game.name} className="img-thumbnail w-100" />
        </Link>

        <div className="cart-game-info w-100">
          <div className="d-flex justify-content-between align-items-start">
            <div className="badge bg-secondary text-primary fw-bold">{getGameType(game.type)}</div>

            <div className="d-none d-md-block">
              <PriceOverview price_overview={game.price_overview} />
            </div>
          </div>

          <Link to={`/game/${game.steam_appid}`}>
            <h3 className="my-1">{game.name}</h3>
          </Link>

          <div className="d-md-none mb-2">
            <PriceOverview price_overview={game.price_overview} />
          </div>

          <PegiRating pegi={game.rating} />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            removeItem(game, setUser, inWishlist ? "wishlist" : "cart");
          }}
          className="btn"
        >
          Remove
        </button>

        {!inWishlist ? (
          <button onClick={(e) => handleMoveToWishlist(e)} className="btn">
            Move to Wishlist
          </button>
        ) : (
          <button onClick={(e) => handleAddToCart(e)} className="btn btn-primary py-1 px-3">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
