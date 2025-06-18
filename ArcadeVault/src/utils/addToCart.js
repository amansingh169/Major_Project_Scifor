import showNotif from "./showNotification";

const addToCart = (gameData, setUser, setIsInCart) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) alert("You need to log in first!");

  const newGame = {
    steam_appid: gameData?.steam_appid,
    name: gameData?.name,
    header_image: gameData?.header_image,
    price_overview: gameData?.price_overview,
    rating: gameData?.ratings?.pegi || gameData.rating,
    type: gameData?.type,
  };

  user.cart.push(newGame);
  if (setIsInCart) setIsInCart(true);

  setUser(user);
  showNotif(`${gameData.name} added to Cart successfully!`);
};

export default addToCart;
