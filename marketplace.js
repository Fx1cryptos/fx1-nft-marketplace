import { ethers } from "ethers";
import marketplaceAbi from "../abi/marketplace.json";

const MARKETPLACE_CONTRACT = "0xYourDeployedContract"; // replace later

export const listNFT = async (signer, tokenId, price) => {
  try {
    const contract = new ethers.Contract(MARKETPLACE_CONTRACT, marketplaceAbi, signer);
    const tx = await contract.listItem(tokenId, ethers.parseEther(price));
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error listing NFT:", error);
    throw error;
  }
};

export const buyNFT = async (signer, tokenId, price) => {
  try {
    const contract = new ethers.Contract(MARKETPLACE_CONTRACT, marketplaceAbi, signer);
    const tx = await contract.buyItem(tokenId, { value: ethers.parseEther(price) });
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error buying NFT:", error);
    throw error;
  }
};
