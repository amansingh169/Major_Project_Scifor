import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import EmptySection from "../components/EmptySection";

const Wishlist = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!user.wishlist) {
    return <h2>Loading...</h2>;
  }

  return user.wishlist.length === 0 ? <EmptySection sectionName="Wishlist" /> : null;
};

export default Wishlist;
