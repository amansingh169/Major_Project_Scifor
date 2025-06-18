import showNotif from "./showNotification";

const moveToWishlist = (gameData, setUser, setIsInWishlist) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return alert("You need to log in first!");

  const newGame = {
    steam_appid: gameData?.steam_appid,
    name: gameData?.name,
    header_image: gameData?.header_image,
    price_overview: gameData?.price_overview,
    rating: gameData?.ratings?.pegi || gameData.rating,
    type: gameData?.type,
  };

  // add to wishlist if there is no duplicate
  const alreadyInWishlist = user.wishlist.some((g) => g.steam_appid === gameData.steam_appid);
  if (!alreadyInWishlist) {
    user.wishlist.push(newGame);
    if (setIsInWishlist) setIsInWishlist(true);
  }

  // remove from cart by filtering
  user.cart = user.cart.filter((g) => g.steam_appid !== gameData.steam_appid);

  setUser(user);
  showNotif(`${gameData.name} moved to Wishlist`);
};

export default moveToWishlist;
