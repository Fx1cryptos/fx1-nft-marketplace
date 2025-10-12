import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// For ES module path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, "dist")));

// Example API route (you can expand this later)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Welcome to FX1 NFT Marketplace Backend 🚀" });
});

// Catch-all handler for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});