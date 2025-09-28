import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MetaverseBackground from "./components/MetaverseBackground";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import MintNFT from "./pages/MintNFT";

// read referral from query param and save
function saveReferralFromQuery() {
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      // only set if not set before
      if (!localStorage.getItem("fx1_ref")) localStorage.setItem("fx1_ref", ref);
    }
  } catch (e) {}
}

function App() {
  useEffect(() => {
    saveReferralFromQuery();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <MetaverseBackground />
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mint" element={<MintNFT />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
