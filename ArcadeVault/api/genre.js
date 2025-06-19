export default async function handler(req, res) {
  const { genre } = req.query;
  if (!genre) return res.status(400).json({ error: "Missing genre" });

  try {
    const res = await fetch(
      `https://steamspy.com/api.php?request=genre&genre=${encodeURIComponent(genre)}`
    );
    const data = await res.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching genre response.", err);
    req.status(500).json({ error: "Failed to fetch genre respone." });
  }
}
