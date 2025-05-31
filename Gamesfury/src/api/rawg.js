const API_KEY = "e0302a5fa3204e068cf2e93232a90e91";
const BASE_URL = "https://api.rawg.io/api";

export const fetchPopularGames = async () => {
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-add&page_size=20`);
  const data = await response.json();
  return data.results;
};

export const fetchNewGames = async () => {
  const today = new Date().toISOString().split("T")[0];
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const lastMonthDate = lastMonth.toISOString().split("T")[0];

  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&dates=${lastMonthDate},${today}&ordering=-added&page_size=25`
  );

  const data = await res.json();
  return data.results;
};
