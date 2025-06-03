const API_KEY = "e0302a5fa3204e068cf2e93232a90e91";
const BASE_URL = "https://api.rawg.io/api";

// Slider calls

export const fetchNewGames = async () => {
  const today = new Date().toISOString().split("T")[0];
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const sixMonthsAgoDate = sixMonthsAgo.toISOString().split("T")[0];

  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&dates=${sixMonthsAgoDate},${today}&ordering=-added&page_size=35`
  );

  const data = await res.json();
  return data.results;
};

export const fetchPopularGames = async () => {
  const today = new Date().toISOString().split("T")[0];
  const twoYearsAgo = new Date();
  twoYearsAgo.setMonth(twoYearsAgo.getMonth() - 60);
  const twoYearsAgoDate = twoYearsAgo.toISOString().split("T")[0];

  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&dates=${twoYearsAgoDate},${today}&ordering=-added&page_size=35`
  );

  const data = await res.json();
  return data.results;
};

export const fetchDiscountedGames = async () => {
  const today = new Date().toISOString().split("T")[0];
  const twoYearsAgo = new Date();
  twoYearsAgo.setMonth(twoYearsAgo.getMonth() - 36);
  const twoYearsAgoDate = twoYearsAgo.toISOString().split("T")[0];

  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&dates=${twoYearsAgoDate},${today}&ordering=-added&page_size=35`
  );

  const data = await res.json();
  return data.results;
};

// Game Details Calls

export const fetchGameData = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  const data = await response.json();
  return data;
};
