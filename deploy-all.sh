#!/bin/bash

echo "🚀 Starting full FX1 NFT Marketplace deployment..."

# 1️⃣ Compile contracts
echo "📦 Compiling contracts..."
npx hardhat compile

# 2️⃣ Deploy contracts to Base Sepolia
echo "🛠️ Deploying to Base Sepolia..."
SEPOLIA_ADDRESS=$(npx hardhat run scripts/deploy.js --network baseSepolia | grep "FX1NFT deployed at" | awk '{print $5}')
MARKETPLACE_SEPOLIA=$(npx hardhat run scripts/deploy.js --network baseSepolia | grep "Marketplace deployed at" | awk '{print $5}')

echo "FX1NFT (Sepolia): $SEPOLIA_ADDRESS"
echo "Marketplace (Sepolia): $MARKETPLACE_SEPOLIA"

# 3️⃣ Deploy contracts to Base Mainnet
echo "🛠️ Deploying to Base Mainnet..."
MAINNET_ADDRESS=$(npx hardhat run scripts/deploy.js --network baseMainnet | grep "FX1NFT deployed at" | awk '{print $5}')
MARKETPLACE_MAINNET=$(npx hardhat run scripts/deploy.js --network baseMainnet | grep "Marketplace deployed at" | awk '{print $5}')

echo "FX1NFT (Mainnet): $MAINNET_ADDRESS"
echo "Marketplace (Mainnet): $MARKETPLACE_MAINNET"

# 4️⃣ Build frontend
echo "⚡ Building frontend..."
cd frontend
npm install
npm run build
cd ..

# 5️⃣ Deploy frontend to Vercel (optional)
# Uncomment if you have vercel CLI installed
# echo "🌐 Deploying frontend to Vercel..."
# vercel --prod

echo "✅ Deployment complete!"
echo "Sepolia: $SEPOLIA_ADDRESS / $MARKETPLACE_SEPOLIA"
echo "Mainnet: $MAINNET_ADDRESS / $MARKETPLACE_MAINNET"