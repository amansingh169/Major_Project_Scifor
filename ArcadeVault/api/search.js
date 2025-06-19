export default async function handler(req, res) {
  const { term } = req.query;
  if (!term) return res.status(400).json({ error: "Missing term param" });

  const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(
    term
  )}&cc=us&l=en`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Search data:", error);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
}
