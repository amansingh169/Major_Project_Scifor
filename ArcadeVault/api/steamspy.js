export default async function handler(req, res) {
  const { type = "top100in2weeks" } = req.query;

  const url = `https://steamspy.com/api.php?request=${type}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching SteamSpy data:", error);
    res.status(500).json({ error: "Failed to fetch SteamSpy data" });
  }
}
