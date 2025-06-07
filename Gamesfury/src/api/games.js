const fetchSteamSpyGames = async (type) => {
  const res = await fetch(`http://localhost:5000/api/steamspy?type=${type}`);
  const data = await res.json();
  return Object.values(data);
};

export const fetchSteamGameData = async (appId) => {
  const res = await fetch(`http://localhost:5000/api/steam?appid=${appId}`);
  const data = await res.json();
  return data[appId]?.data || null;
};

const fetchGameList = async (type) => {
  const steamSpyGames = await fetchSteamSpyGames(type);

  const games = await Promise.all(
    steamSpyGames.map(async (spyData) => {
      console.log(spyData);

      const appId = spyData.appid;
      const steamData = await fetchSteamGameData(appId);
      if (!steamData) return null;

      return {
        id: steamData.steam_appid,
        name: steamData.name,
        positive: spyData.positive,
        negative: spyData.negative,
        banner: steamData.header_image,
        price: steamData.price_overview || null,
      };
    })
  );

  return games;
};

export const fetchGames = () => fetchGameList("top100forever");
