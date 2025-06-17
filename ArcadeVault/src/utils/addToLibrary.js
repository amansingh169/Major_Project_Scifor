import { fetchSteamGameData } from "../api/games";
import showNotif from "./showNotification";

const addToLibrary = async (gameData, setUser, setIsInLib) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let data;

  if (!user) alert("You need to log in first!");

  if (!gameData?.achievements) {
    data = await fetchSteamGameData(gameData.steam_appid);
  } else {
    data = gameData;
  }

  const newGame = {
    steam_appid: data?.steam_appid,
    name: data?.name,
    header_image: data?.header_image,
    achievements: {
      completed: 0,
      total: data?.achievements?.total,
    },
    isfavorite: false,
    totalplayed: 0,
  };

  user.collections.all.push(newGame);
  setIsInLib(true);
  setUser(user);
  showNotif(`${data.name} added to library successfully!`);
};

export default addToLibrary;
