import React from "react";
import NFTGallery from "../components/NFTGallery";

export default function Marketplace(){
  return (
    <>
      <div className="card" style={{marginBottom:12}}>
        <h2>Marketplace</h2>
        <p className="small">Browse listed NFTs from OpenSea and Zora. Connect your wallet to list, buy or interact.</p>
      </div>

      <NFTGallery limit={30} />
    </>
  );
}
