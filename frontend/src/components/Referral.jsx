import React from "react";
import { CONFIG } from "../config";

/**
 * Simple referral component:
 * - Shows current referral code (from localStorage or derived from wallet)
 * - Allows copying invite link: SITE_HOST/?ref=CODE
 * - For production: generate codes & store in DB/server
 */

function makeCodeFromAddress(addr = "") {
  if (!addr) return "guest";
  return addr.slice(2, 8).toUpperCase();
}

export default function Referral({compact=false}) {
  const wallet = typeof window !== "undefined" ? localStorage.getItem("fx1_wallet") : null;
  const stored = typeof window !== "undefined" ? localStorage.getItem("fx1_ref_code") : null;
  const code = stored || (wallet ? makeCodeFromAddress(wallet) : null) || "GUEST";

  const inviteLink = `${CONFIG.SITE_HOST || window.location.origin}/?ref=${code}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert("Referral link copied!");
    } catch {
      prompt("Copy this link:", inviteLink);
    }
  };

  return (
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      {!compact && <div style={{fontSize:13, color:'var(--muted)'}}>Invite</div>}
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <div style={{background:"rgba(255,255,255,0.02)", padding:"6px 8px", borderRadius:8}}>{code}</div>
        <button onClick={copy} className="btn secondary">Copy Link</button>
      </div>
    </div>
  );
}
