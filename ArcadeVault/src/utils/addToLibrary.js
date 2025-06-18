import showNotif from "./showNotification";

const addToLibrary = async (gameData, setUser, setIsInLib) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) alert("You need to log in first!");

  const newGame = {
    steam_appid: gameData?.steam_appid,
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
  setUser(user);
  showNotif(`${gameData.name} added to library successfully!`);
};

export default addToLibrary;
