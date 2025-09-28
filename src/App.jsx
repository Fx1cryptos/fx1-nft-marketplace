import React from "react";
import { FaTwitter, FaGithub, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* 3D Background Layer */}
      <div className="background"></div>

      {/* Hero Section */}
      <header className="hero">
        <h1>⚡ FX1 DIGITAL HUBS</h1>
        <p>
          Where <span className="highlight">Digital Fashion</span> meets{" "}
          <span className="highlight">Onchain Culture</span>.
        </p>
        <div className="hero-buttons">
          <a href="#marketplace" className="btn">Explore Wardrobe</a>
          <a href="#token" className="btn secondary">Learn about $FDH</a>
        </div>
      </header>

      {/* Marketplace Preview */}
      <section id="marketplace" className="section">
        <h2>🛍️ Marketplace</h2>
        <p>Discover surreal art, digital fashion, and metaverse-ready wearables.</p>
        <div className="nft-grid">
          <div className="nft-card">NFT #1</div>
          <div className="nft-card">NFT #2</div>
          <div className="nft-card">NFT #3</div>
        </div>
      </section>

      {/* Token Utility */}
      <section id="token" className="section dark">
        <h2>💎 $FDH Utility</h2>
        <p>
          $FDH is the utility and community token powering FX1’s ecosystem —
          unlocking digital ownership, rewards, and culture onchain.
        </p>
        <ul>
          <li>✅ Daily check-ins earn FDH points</li>
          <li>✅ Referral rewards for early believers</li>
          <li>✅ Access to exclusive FX1 Digital Wardrobe drops</li>
        </ul>
      </section>

      {/* Community Call-to-Action */}
      <section id="community" className="section">
        <h2>🌍 Join the Movement</h2>
        <p>Co-create the future of NFT Fashion & Onchain Culture with FX1.</p>
        <div className="hero-buttons">
          <a href="#daily" className="btn">Daily Check-in</a>
          <a href="#referral" className="btn secondary">Referral Invite</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} FX1 DIGITAL HUBS. All rights reserved.</p>
        <div className="socials">
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://github.com/Fx1cryptos" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://discord.gg/yourdiscord" target="_blank" rel="noreferrer"><FaDiscord /></a>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
