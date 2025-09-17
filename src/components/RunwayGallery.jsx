import React, { useEffect, useState } from "react";
import { fetchZoraNFTs } from "../tools/zoraApi";
import { fetchOpenseaNFTs } from "../tools/openseaApi";
import "./RunwayGallery.css";

const RunwayGallery = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRunwayNFTs = async () => {
      try {
        setLoading(true);
        
        // Fetch from both Zora and OpenSea
        const [zoraNFTs, openseaNFTs] = await Promise.all([
          fetchZoraNFTs(),
          fetchOpenseaNFTs()
        ]);

        // Combine and format NFTs for runway display
        const combinedNFTs = [
          ...zoraNFTs.map(nft => ({
            id: `zora-${nft.token.tokenId}`,
            name: nft.token.name || `Zora #${nft.token.tokenId}`,
            image: nft.token.image || nft.token.metadata?.image,
            description: nft.token.description || "Onchain Fashion Art",
            platform: "Zora",
            link: `https://zora.co/collections/0x9b889aa4f3da5e96ceab76a4e2be68137a03f29d/${nft.token.tokenId}`
          })),
          ...openseaNFTs.slice(0, 8).map((nft, index) => ({
            id: `opensea-${index}`,
            name: nft.name || `OpenSea #${index}`,
            image: nft.image_url || nft.metadata?.image,
            description: nft.description || "Digital Fashion NFT",
            platform: "OpenSea",
            link: nft.opensea_url || "#"
          }))
        ];

        setNfts(combinedNFTs);
      } catch (error) {
        console.error("Error loading runway NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRunwayNFTs();
  }, []);

  if (loading) {
    return (
      <div className="runway-loading">
        <div className="loading-spinner"></div>
        <p>Loading Onchain Fashion Runway...</p>
      </div>
    );
  }

  return (
    <section className="runway-gallery">
      <div className="runway-header">
        <h2>✨ FX1 Onchain Fashion Runway ✨</h2>
        <p>Live showcase of digital fashion NFTs from Zora and OpenSea</p>
      </div>
      
      <div className="runway-strip">
        <div className="runway-track">
          {nfts.concat(nfts).map((nft, index) => (
            <div key={`${nft.id}-${index}`} className="runway-card">
              <div className="runway-image-container">
                <img
                  src={nft.image || "/assets/placeholder.png"}
                  alt={nft.name}
                  className="runway-image"
                  onError={(e) => {
                    e.target.src = "/assets/placeholder.png";
                  }}
                />
                <div className="runway-overlay">
                  <span className="platform-badge">{nft.platform}</span>
                </div>
              </div>
              <div className="runway-info">
                <h4>{nft.name}</h4>
                <p>{nft.description}</p>
                <a 
                  href={nft.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="runway-link"
                >
                  View NFT →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunwayGallery;