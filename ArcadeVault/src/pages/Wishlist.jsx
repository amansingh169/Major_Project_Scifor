import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import Filters from "../components/Filters";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SortBy from "../components/SortBy";

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
        <div className="d-flex align-items-center gap-2">
          <h1 className="lh-1 m-0">Wishlist</h1>
          <a href="">
            <i className="bi bi-arrow-clockwise fs-3 text-muted"></i>
          </a>
        </div>

        <a className="nav-link d-flex align-items-center" href="#">
          <div className="d-none d-sm-block">
            <span>AV Wallet</span>
            <i className="bi bi-arrow-up-right-square ms-2"></i>
          </div>

          <div className="badge bg-card text-primary fs-4 ms-3">
            $ 56.88
            <i className="bi bi-arrow-up-right-square ms-2 d-sm-none"></i>
          </div>
        </a>
      </div>

      <div className="row">
        <div className="cart-items col-12 col-xl-9 col-lg-8 d-flex flex-column gap-3">
          <SortBy />

          {wishlist.reverse().map((game) => (
            <CartItem key={game.steam_appid} game={game} inWishlist={true} />
          ))}
        </div>

        <div className="details-aside col-12 col-xl-3 col-lg-4 mt-4 mt-lg-0">
          <h4 className="mb-4">Filters</h4>
          <Filters />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
