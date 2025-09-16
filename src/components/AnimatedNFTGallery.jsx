import React, { useEffect, useState } from "react";
import { fetchOpenseaNFTs } from "../tools/openseaApi";
import "./AnimatedNFTGallery.css";

const AnimatedNFTGallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      const data = await fetchOpenseaNFTs();
      setNfts(data);
    };
    loadNFTs();
  }, []);

  return (
    <div className="nft-gallery">
      <h2 className="gallery-title">✨ My Onchain NFT Collection ✨</h2>
      <div className="nft-grid">
        {nfts.length > 0 ? (
          nfts.map((nft, index) => (
            <div key={index} className="nft-card fade-in">
              <img
                src={nft.image_url || nft.metadata?.image}
                alt={nft.name || "NFT"}
                className="nft-image"
              />
              <h3>{nft.name || "Unnamed NFT"}</h3>
              <p>{nft.description || "NFT from my OpenSea collection"}</p>
            </div>
          ))
        ) : (
          <p>Loading NFTs from OpenSea...</p>
        )}
      </div>
    </div>
  );
};

export default AnimatedNFTGallery;
