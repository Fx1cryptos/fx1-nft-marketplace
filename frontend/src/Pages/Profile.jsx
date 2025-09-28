import React, { useEffect, useState } from "react";

export default function Profile(){
  const [wallet, setWallet] = useState(null);
  const [points, setPoints] = useState(0);
  const [ref, setRef] = useState(null);

  useEffect(()=>{
    setWallet(localStorage.getItem("fx1_wallet"));
    setPoints(parseInt(localStorage.getItem("fx1_points_balance") || "0", 10));
    setRef(localStorage.getItem("fx1_ref") || "—");
  },[]);

  return (
    <div>
      <div className="card" style={{marginBottom:12}}>
        <h2>Your Profile</h2>
        <div style={{display:"flex", gap:12, alignItems:"center"}}>
          <div>
            <div className="small">Wallet</div>
            <div style={{fontWeight:700}}>{wallet || "Not connected"}</div>
          </div>
          <div>
            <div className="small">$FDH Points</div>
            <div style={{fontWeight:700}}>{points}</div>
          </div>
          <div style={{marginLeft:"auto"}}>
            <div className="small">Referral (first seen)</div>
            <div>{ref}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Your NFTs</h3>
        <p className="small">This view can show NFTs owned by your connected wallet. For now it uses DEFAULT_OWNER or stored wallet.</p>
      </div>
    </div>
  );
              }
