export default async function handler(req, res) {
  const genre = req.query.genre;
  if (!genre) return res.status(400).json({ error: "Missing genre" });

  const url = `https://steamspy.com/api.php?request=/genre&genre=${genre}&t=${Date.now()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching genre response.", err);
    res.status(500).json({ error: "Failed to fetch genre respone." });
  }
}
