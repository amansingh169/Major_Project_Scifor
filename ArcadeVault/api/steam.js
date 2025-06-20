export default async function handler(req, res) {
  const { appid } = req.query;
  if (!appid) return res.status(400).json({ error: "Missing appid param" });

  const url = `https://store.steampowered.com/api/appdetails?appids=${appid}&cc=us`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Steam game data:", error);
    res.status(500).json({ error: "Failed to fetch Steam Store data" });
  }
}
