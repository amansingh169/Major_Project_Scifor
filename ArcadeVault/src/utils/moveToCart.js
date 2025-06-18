import showNotif from "./showNotification";

const moveToCart = (gameData, setUser, setIsInCart) => {
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

  // add to cart if there is no duplicate
  const alreadyInCart = user.cart.some((g) => g.steam_appid === gameData.steam_appid);
  if (!alreadyInCart) {
    user.cart.push(newGame);
    if (setIsInCart) setIsInCart(true);
  }

  // remove from wishlist by filtering
  user.wishlist = user.wishlist.filter((g) => g.steam_appid !== gameData.steam_appid);

  setUser(user);
  showNotif(`${gameData.name} moved to Cart`);
};

export default moveToCart;
