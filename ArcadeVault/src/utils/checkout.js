import { fetchSteamGameData } from "../api/games";
import showNotification from "./showNotification";

const checkout = async (setUser) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) alert("You need to log in first!");

  const cart = user.cart || [];

  const newGames = await Promise.all(
    cart.map(async (game) => {
      const data = await fetchSteamGameData(game.steam_appid);

      return {
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
    })
  );

  user.collections.all.push(...newGames);
  user.cart = [];
  setUser(user);
  showNotification("Checkout complete! Games added to your library.");
};

export default checkout;
