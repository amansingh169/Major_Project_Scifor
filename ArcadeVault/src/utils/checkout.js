import showNotification from "./showNotification";

const checkout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) alert("You need to log in first!");

  const newGames = user.cart || [];
  const library = user.collections.all || [];

  user.collections.all = [...library, ...newGames];
  user.cart = [];
};

// this is incomplete, need to loop thru each game to change structure
