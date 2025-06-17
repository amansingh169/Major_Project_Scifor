import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

const Wishlist = () => {
  const { user } = useContext(UserContext);
  const wishlist = user?.wishlist;

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!wishlist) {
    return <h2>Loading...</h2>;
  }

  if (user.wishlist.length === 0) return <EmptySection sectionName="Wishlist" />;

  return (
    <div className="wishlist-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="lh-1 m-0">Cart</h1>

        <a className="nav-link d-flex align-items-center" href="#">
          <span>AV Wallet</span>
          <i className="bi bi-arrow-up-right-square ms-2"></i>
          <div className="badge bg-card fs-4 ms-3">$ 56.88</div>
        </a>
      </div>

      <div className="row">
        <div className="cart-items col-12 col-xl-9 col-lg-8 d-flex flex-column gap-3">
          {wishlist.map((game) => (
            <CartItem key={game.steam_appid} game={game} inWishlist={true} />
          ))}
        </div>

        <div className="details-aside col-12 col-xl-3 col-lg-4 mt-4 mt-lg-0">
          <h3 className="mb-5">Filters</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
