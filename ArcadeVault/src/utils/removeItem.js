import showNotification from "./showNotification";

const removeItem = (game, setUser, removeFrom, setState) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let targetCollection;

  if (!user) return alert("You need to log in first!");

  if (removeFrom === "library") {
    targetCollection = user.collections.all;
  } else if (removeFrom === "cart" || removeFrom === "wishlist") {
    targetCollection = user[removeFrom];
  } else {
    console.error("Invalid prop passed to removeItem function!");
  }

  const filtered = targetCollection.filter((g) => g.steam_appid !== game.steam_appid);

  if (removeFrom === "library") {
    user.collections.all = filtered;
  } else {
    user[removeFrom] = filtered;
  }

  localStorage.setItem("user", JSON.stringify(user));
  setUser(user);
  if (setState) setState(false);
  showNotification(`${game.name} removed from ${removeFrom}.`);
};

export default removeItem;
