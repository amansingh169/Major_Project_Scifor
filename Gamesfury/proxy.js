import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

// Proxy for SteamSpy API
app.get("/api/steamspy", async (req, res) => {
  const { type = "top100in2weeks" } = req.query;
  const url = `https://steamspy.com/api.php?request=${type}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching SteamSpy data:", error);
    res.status(500).json({ error: "Failed to fetch SteamSpy data" });
  }
});

// Proxy for Steam Store API
app.get("/api/steam", async (req, res) => {
  const { appid } = req.query;
  if (!appid) return res.status(400).json({ error: "Missing appid query param" });

  const url = `https://store.steampowered.com/api/appdetails?appids=${appid}&cc=us`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Steam Store data:", error);
    res.status(500).json({ error: "Failed to fetch Steam Store data" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
