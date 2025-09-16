const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Deploy NFT
  const NFT = await hre.ethers.getContractFactory("FX1NFT");
  const nft = await NFT.deploy(
    "FX1 Digital Hubs NFT", // Name
    "FDH",                  // Symbol
    1000,                   // Max Supply
    hre.ethers.parseEther("0.01"), // Mint Price (0.01 ETH/Base)
    true                    // Free mint enabled
  );
  await nft.waitForDeployment();
  console.log("NFT deployed to:", await nft.getAddress());

  // Deploy Marketplace
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const market = await Marketplace.deploy();
  await market.waitForDeployment();
  console.log("Marketplace deployed to:", await market.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
