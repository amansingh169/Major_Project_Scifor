import showNotif from "./showNotification";

const addToCart = (gameData, setUser, setIsInCart) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) alert("You need to log in first!");

  const newGame = {
    appid: gameData?.steam_appid,
    name: gameData?.name,
    header_image: gameData?.header_image,
    price_overview: gameData?.price_overview,
    rating: gameData?.ratings?.pegi,
    type: gameData?.type,
  };

  user.cart.push(newGame);
  setIsInCart(true);

  localStorage.setItem("user", JSON.stringify(user));
  setUser(user);
  showNotif(`${gameData.name} added to Cart successfully!`);
};

export default addToCart;
