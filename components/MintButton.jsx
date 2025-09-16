import React, { useState } from "react";
import { ethers } from "ethers";

const MintButton = () => {
  const [minting, setMinting] = useState(false);

  const handleMint = async () => {
    try {
      if (!window.ethereum) return alert("Install MetaMask or Rainbow Wallet!");
      setMinting(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      // Replace with your FX1NFT contract address
      const contractAddress = import.meta.env.VITE_FX1_ADDRESS;
      const abi = []; // Add your FX1NFT ABI here
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.mint({ value: ethers.parseEther("0.01") });
      await tx.wait();
      alert("Minted successfully!");
    } catch (err) {
      console.error(err);
      alert("Mint failed!");
    } finally {
      setMinting(false);
    }
  };

  return (
    <button onClick={handleMint} disabled={minting}>
      {minting ? "Minting..." : "Mint NFT"}
    </button>
  );
};

export default MintButton;
