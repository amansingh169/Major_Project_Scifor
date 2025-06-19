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

// Proxy for SteamSpy genre-based games
app.get("/api/steamspy/genre", async (req, res) => {
  const { genre } = req.query;
  if (!genre) return res.status(400).json({ error: "Missing genre" });

  const url = `https://steamspy.com/api.php?request=genre&genre=${encodeURIComponent(genre)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching SteamSpy genre data:", error);
    res.status(500).json({ error: "Failed to fetch genre data from SteamSpy" });
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

// Proxy for Steam Search API
app.get("/api/search", async (req, res) => {
  const { term } = req.query;
  if (!term) return res.status(400).json({ error: "Missing Search Term!" });

  const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(
    term
  )}&cc=us&l=en`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching steam search data:", err);
    res.status(500).json({ error: "Failed to fetch Steam search data" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
