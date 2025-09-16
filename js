// server.js
// FX1 NFT Marketplace - Node.js Backend
// Powered by FX1 Digital Hubs ($FDH)

import express from "express";
import dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("🚀 FX1 NFT Marketplace Backend Running on Base!");
});

// Example: Connect to Base RPC
const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);

// Example: Get block number
app.get("/block", async (req, res) => {
  try {
    const blockNumber = await provider.getBlockNumber();
    res.json({ chain: "Base", blockNumber });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`⚡ FX1 NFT Marketplace server running at http://localhost:${PORT}`);
});
