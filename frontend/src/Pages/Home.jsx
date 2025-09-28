import React from "react";
import DailyCheck from "../components/DailyCheck";
import NFTGallery from "../components/NFTGallery";

export default function Home(){
  return (
    <>
      <div style={{display:"flex", gap:16, alignItems:"flex-start", marginBottom:16}}>
        <div style={{flex:"1 1 420px"}}>
          <div className="card">
            <h2>Welcome to FX1 Digital Hubs</h2>
            <p className="small">Surreal art, NFT fashion, and the FX1 Digital Wardrobe. Holders of <strong>$FDH</strong> get early access to drops and exclusive wearable NFTs.</p>
            <div style={{marginTop:12, display:"flex", gap:8}}>
              <a className="btn" href="/mint">Create / Mint</a>
              <a className="btn secondary" href="/marketplace">Explore Marketplace</a>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <NFTGallery />
          </div>
        </div>

        <div style={{width:320}}>
          <DailyCheck />
          <div style={{height:12}}></div>
          <div className="card" style={{marginTop:12}}>
            <h3>FX1 Digital Wardrobe</h3>
            <p className="small">Wearables: preview on avatars coming soon. Use the Mint page to create wearable NFTs for your wardrobe.</p>
          </div>
        </div>
      </div>
    </>
  );
}
