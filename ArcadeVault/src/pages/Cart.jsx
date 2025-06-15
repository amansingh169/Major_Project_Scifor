import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";

const Cart = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!user.cart) {
    return <h2>Loading...</h2>;
  }

  return user.cart.length === 0 ? <EmptySection sectionName="Cart" /> : null;
};

export default Cart;
