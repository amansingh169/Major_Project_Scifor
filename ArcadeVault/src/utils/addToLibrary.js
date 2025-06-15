import showNotif from "./showNotification";

const addToLibrary = (gameData, setUser, setIsInLib) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const newGame = {
    appId: gameData?.steam_appid,
    name: gameData?.name,
    header_image: gameData?.header_image,
    achievements: {
      completed: 0,
      total: gameData?.achievements?.total,
    },
    isfavorite: false,
    totalplayed: 0,
  };

  user.collections.all.push(newGame);
  setIsInLib(true);

  localStorage.setItem("user", JSON.stringify(user));
  setUser(user);
  showNotif(`${gameData.name} added to library successfully!`);
};

export default addToLibrary;
