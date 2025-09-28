import React from "react";

/**
 * Small NFT card for gallery.
 * Accepts { image, name, description, external_link, token_id, collection }
 */
export default function NFTCard({ nft }) {
  const { image, name, description, external_link, token_id, collection } = nft;
  return (
    <div className="card nft-card">
      <img src={image || "/vite.svg"} alt={name || "NFT"} />
      <div className="meta">
        <div>
          <div style={{fontWeight:700}}>{name || `#${token_id || "?"}`}</div>
          <div className="small">{collection || ""}</div>
        </div>
        <div>
          <a href={external_link || "#"} target="_blank" rel="noreferrer" className="btn secondary">View</a>
        </div>
      </div>
    </div>
  );
}
