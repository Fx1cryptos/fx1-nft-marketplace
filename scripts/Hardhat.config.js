require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with wallet:", deployer.address);

  const FX1FashionNFT = await ethers.getContractFactory("FX1FashionNFT");
  const contract = await FX1FashionNFT.deploy(process.env.WALLET_ADDRESS, 500); // 5% royalties

  await contract.deployed();
  console.log("FX1FashionNFT deployed to:", contract.address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});