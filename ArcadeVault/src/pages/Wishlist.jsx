import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import Filters from "../components/Filters";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Wishlist = () => {
  const { user } = useContext(UserContext);
  const wishlist = user?.wishlist;

  const [sortBy, setSortBy] = useState("On Sale");

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
          <div className="sort-by d-flex align-items-center">
            <span>Sort by:</span>

            <div class="dropdown">
              <button
                class="btn text-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {sortBy}
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <div onClick={() => setSortBy("On Sale")} class="dropdown-item" href="#">
                    On Sale
                  </div>
                </li>
                <li>
                  <div onClick={() => setSortBy("Recently Added")} class="dropdown-item" href="#">
                    Recently Added
                  </div>
                </li>
                <li>
                  <div onClick={() => setSortBy("Alphabetical")} class="dropdown-item" href="#">
                    Alphabetical
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => setSortBy("Price: Low to High")}
                    class="dropdown-item"
                    href="#"
                  >
                    Price: Low to High
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => setSortBy("Price: High to Low")}
                    class="dropdown-item"
                    href="#"
                  >
                    Price: High to Low
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {wishlist.map((game) => (
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
