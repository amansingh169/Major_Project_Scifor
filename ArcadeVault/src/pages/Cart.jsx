import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";
import Footer from "../components/Footer";

const Cart = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!user.cart) {
    return <h2>Loading...</h2>;
  }

  return user.cart.length === 0 ? (
    <EmptySection sectionName="Cart" />
  ) : (
    <div className="cart-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="lh-1 m-0">Cart</h1>

        <a className="d-flex align-items-center" href="#">
          <span className="fs-5 text-primary">AV Wallet</span>
          <i className="bi bi-arrow-up-right-square ms-2 fs-5 text-muted"></i>
          <div className="badge bg-secondary fs-4 ms-3">$ 56.88</div>
        </a>
      </div>

      <div className="row">
        <div className="cart-items col-12 col-xl-9 col-md-8 order-2 order-md-1 bg-primary">
          Hello
        </div>
        <div className="details-aside col-12 col-xl-3 col-md-4 order-1 order-md-2 bg-secondary">
          <h3 className="mb-5">Games & Apps Summary</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
