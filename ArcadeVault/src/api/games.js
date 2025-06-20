const getBaseUrl = () => {
  return import.meta.env.DEV ? "http://localhost:5000/api" : "/api";
};

const baseUrl = getBaseUrl();

const fetchSteamSpyGames = async (type) => {
  try {
    const res = await fetch(`${baseUrl}/steamspy?type=${type}`);
    const data = await res.json();
    return Object.values(data);
  } catch (err) {
    console.error("Error fetching game list from SteamSpy:", err);
  }
};

const fetchSteamSpyGenreGames = async (genre) => {
  try {
    const res = await fetch(`${baseUrl}/steamspy/genre?genre=${encodeURIComponent(genre)}`);
    const data = await res.json();
    return Object.values(data);
  } catch (err) {
    console.error("Error fetching genre-based games from SteamSpy:", err);
  }
};

export const fetchSteamGameData = async (appId) => {
  try {
    const res = await fetch(`${baseUrl}/steam?appid=${appId}`);
    const data = await res.json();

    if (!data || !data[appId] || !data[appId].data) {
      console.warn(`No valid data for appid: ${appId}`, data);
      return null;
    }

    return data[appId].data;
  } catch (err) {
    console.error("Error fetching game data from Steam:", err);
  }
};

export const fetchSearchList = async (query) => {
  try {
    const res = await fetch(`${baseUrl}/search?term=${query}&cc=us&l=en`);
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
        steam_appid: steamData.steam_appid,
        name: steamData.name,
        type: steamData.type,
        genres: steamData.genres,
        header_image: steamData.header_image,
        price_overview: steamData.price_overview || null,
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
        steam_appid: steamData.steam_appid,
        name: steamData.name,
        type: steamData.type,
        genres: steamData.genres,
        header_image: steamData.header_image,
        price_overview: steamData.price_overview || null,
      };
    })
  );

  return games;
};

export const fetchGenreGameList = async (type, start = 101, end = 151) => {
  const gamesList = await fetchSteamSpyGenreGames(type);

  const games = await Promise.all(
    gamesList.slice(start, end).map(async (spyData) => {
      const steamData = await fetchSteamGameData(spyData.appid);
      if (!steamData) return null;

      return {
        steam_appid: steamData.steam_appid,
        name: steamData.name,
        type: steamData.type,
        genres: steamData.genres,
        header_image: steamData.header_image,
        price_overview: steamData.price_overview || null,
      };
    })
  );

  return games.filter(Boolean);
};

export const fetchGames = () => fetchGameList("top100in2weeks");
