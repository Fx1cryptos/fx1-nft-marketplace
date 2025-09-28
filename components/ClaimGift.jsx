import React, { useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";

export default function ClaimGift({ apiBase }) {
  // apiBase example: 'https://yourserver.com' or 'http://localhost:4001'
  const [giftObj, setGiftObj] = useState(null);
  const [signature, setSignature] = useState(null);
  const [status, setStatus] = useState("");
  const [recipient, setRecipient] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // read URL params ?gift=...&sig=...
    try {
      const params = new URLSearchParams(window.location.search);
      const giftParam = params.get("gift");
      const sigParam = params.get("sig");
      if (giftParam) {
        const parsed = JSON.parse(decodeURIComponent(giftParam));
        setGiftObj(parsed);
      }
      if (sigParam) setSignature(decodeURIComponent(sigParam));
    } catch (e) {
      console.warn("Invalid gift params", e);
    }
  }, []);

  const detectWallet = async () => {
    if (!window.ethereum) {
      alert("Please open in a Web3 browser or install MetaMask.");
      return null;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const addr = await signer.getAddress();
    setRecipient(addr);
    return addr;
  };

  const redeem = async () => {
    if (!giftObj || !signature) {
      setStatus("No gift code found in URL.");
      return;
    }
    setProcessing(true);
    setStatus("Redeeming...");
    try {
      let rec = recipient;
      if (!rec) {
        rec = await detectWallet();
        if (!rec) {
          setStatus("No wallet detected.");
          setProcessing(false);
          return;
        }
      }

      const res = await axios.post(`${apiBase}/redeem`, {
        gift: giftObj,
        signature,
        recipient: rec
      });

      if (res.data && res.data.success) {
        setStatus(`Success! Gift claimed: ${JSON.stringify(res.data.gift)}`);
      } else {
        setStatus(`Redeem response: ${JSON.stringify(res.data)}`);
      }
    } catch (err) {
      console.error(err);
      setStatus(err?.response?.data?.error || err.message || "Redeem failed");
    }
    setProcessing(false);
  };

  return (
    <div className="card" style={{maxWidth:800, margin:"12px auto"}}>
      <h2>Claim Gift</h2>
      {!giftObj ? <div className="small">No gift found in URL. Paste a gift link or code.</div> : (
        <div>
          <div className="small">Gift ID: {giftObj.id}</div>
          <div className="small">Type: {giftObj.type} — Value: {giftObj.value || "-"}</div>
          <div className="small">Expires: {giftObj.expires || "Never"}</div>
        </div>
      )}

      <div style={{marginTop:12, display:"flex", gap:8}}>
        <input placeholder="Recipient address (optional)" value={recipient} onChange={(e)=>setRecipient(e.target.value)} style={{flex:1}} />
        <button className="btn" onClick={detectWallet}>Detect Wallet</button>
        <button className="btn" onClick={redeem} disabled={processing}>{processing ? "Working..." : "Redeem Gift"}</button>
      </div>

      <div style={{marginTop:12}} className="small">{status}</div>

      <hr style={{margin:"12px 0"}} />

      <div className="small">If you are the creator of this gift, use your admin tool to view gift & claims.</div>
    </div>
  );
    }
