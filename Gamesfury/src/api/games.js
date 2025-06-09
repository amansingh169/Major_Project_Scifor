const fetchSteamSpyGames = async (type) => {
  try {
    const res = await fetch(`http://localhost:5000/api/steamspy?type=${type}`);
    const data = await res.json();
    return Object.values(data);
  } catch (err) {
    console.error("Error fetching game list from SteamSpy:", err);
  }
};

export const fetchSteamGameData = async (appId) => {
  try {
    const res = await fetch(`http://localhost:5000/api/steam?appid=${appId}`);
    const data = await res.json();
    return data[appId]?.data || null;
  } catch (err) {
    console.error("Error fetching game data from Steam:", err);
  }
};

export const fetchSearchList = async (query) => {
  try {
    const res = await fetch(`http://localhost:5000/api/search?term=${query}&cc=us&l=en`);
    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error("Search Failed: ", err);
  }
};

export const fetchSearchResults = async (query) => {
  const searchList = await fetchSearchList(query);

  const searchResults = await Promise.all(
    searchList.map(async (game) => {
      const steamData = await fetchSteamGameData(game.id);
      if (!steamData) return null;

      return {
        id: steamData.steam_appid,
        name: steamData.name,
        type: steamData.type,
        genres: steamData.genres,
        banner: steamData.header_image,
        price: steamData.price_overview || null,
        fullData: steamData,
      };
    })
  );

  return searchResults;
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
        type: steamData.type,
        genres: steamData.genres,
        banner: steamData.header_image,
        price: steamData.price_overview || null,
      };
    })
  );

  return games;
};

export const fetchGames = () => fetchGameList("top100in2weeks");
