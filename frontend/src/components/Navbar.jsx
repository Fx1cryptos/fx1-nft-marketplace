import React from "react";
import { Link } from "react-router-dom";
import WalletConnect from "./WalletConnect";
import Referral from "./Referral";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
        <h1>⚡ FX1 Digital Hubs</h1>
        <div style={{fontSize:'0.9rem', color:'var(--muted)'}}>Surreal NFTs · Digital Wardrobe · $FDH</div>
      </div>

      <div style={{display:"flex", alignItems:"center", gap:'1rem'}}>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/mint">Mint NFT</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Referral compact />
        <WalletConnect />
      </div>
    </nav>
  );
};

export default Navbar;
