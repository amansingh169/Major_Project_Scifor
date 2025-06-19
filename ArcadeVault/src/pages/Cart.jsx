import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import checkout from "../utils/checkout";

const Cart = () => {
  const { user, setUser } = useContext(UserContext);
  const cart = user?.cart;

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!cart) {
    return <h2>Loading...</h2>;
  }

  const price = cart.reduce((total, item) => {
    const finalPrice = item?.price_overview?.initial;
    return total + (finalPrice ? finalPrice / 100 : 0);
  }, 0);

  const discount = cart.reduce((total, item) => {
    const discountPercent = item?.price_overview?.discount_percent || 0;
    const originalPrice = item?.price_overview?.initial || 0;
    return total + (originalPrice * (discountPercent / 100)) / 100;
  }, 0);

  const subtotal = price - discount;

  if (cart.length === 0) return <EmptySection sectionName="Cart" />;

  return (
    <div className="cart-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex align-items-center gap-2">
          <h1 className="lh-1 m-0">Cart</h1>
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
          {cart.reverse().map((game) => (
            <CartItem key={game.steam_appid} game={game} />
          ))}
        </div>

        <div className="details-aside col-12 col-xl-3 col-lg-4 mt-4 mt-lg-0">
          <h2 className="mb-5">Games & Apps Summary</h2>

          <div className="d-flex flex-column text-primary">
            <div className="d-flex justify-content-between mb-3">
              <span>Price</span>
              <span>${price.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Discount</span>
              <span>${discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <strong>Subtotal</strong>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <button onClick={() => checkout(setUser)} className="btn btn-primary rounded-10">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
