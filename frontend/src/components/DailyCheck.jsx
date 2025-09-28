import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { CONFIG } from "../config";

/**
 * Client-side daily check:
 * - credits FDH points on first claim per day (localStorage)
 * - integrates easily with a server by calling the API endpoint when user claims.
 *
 * Note: For production store awarding and referral credits on the server to avoid abuse.
 */

const KEY_BALANCE = "fx1_points_balance";
const KEY_LAST = "fx1_last_claim";

export default function DailyCheck() {
  const [balance, setBalance] = useState(0);
  const [last, setLast] = useState(null);
  const [claimedToday, setClaimedToday] = useState(false);

  useEffect(() => {
    const b = parseInt(localStorage.getItem(KEY_BALANCE) || "0", 10);
    setBalance(b);
    const l = localStorage.getItem(KEY_LAST");
    setLast(l);
    setClaimedToday(isSameDay(l));
  }, []);

  function isSameDay(iso) {
    if (!iso) return false;
    return dayjs(iso).isSame(dayjs(), "day");
  }

  const claim = async () => {
    if (claimedToday) return;
    // local update
    const add = CONFIG.FDH_POINTS_DAILY || 10;
    const newBal = balance + add;
    const now = new Date().toISOString();
    localStorage.setItem(KEY_BALANCE, "" + newBal);
    localStorage.setItem(KEY_LAST, now);
    setBalance(newBal);
    setLast(now);
    setClaimedToday(true);

    // Optional hook: send to your server to credit real FDH tokens / record claim
    // fetch('/api/claim-daily', {method:'POST', body: JSON.stringify({wallet:..., points:add})})
  };

  return (
    <div className="card">
      <h3 style={{margin:"0 0 0.75rem 0"}}>Daily Check — Earn {CONFIG.FDH_POINTS_DAILY} {CONFIG.FDH_TOKEN}</h3>
      <div style={{display:"flex", alignItems:"center", gap:12}}>
        <div>
          <div style={{fontSize:24, fontWeight:700}}>{balance} <span style={{fontSize:12}}> {CONFIG.FDH_TOKEN} pts</span></div>
          <div className="small">Last claim: {last ? new Date(last).toLocaleString() : "Never"}</div>
        </div>
        <div style={{marginLeft:"auto"}}>
          <button className="btn" onClick={claim} disabled={claimedToday}>
            {claimedToday ? "Claimed today" : `Claim ${CONFIG.FDH_POINTS_DAILY}`}
          </button>
        </div>
      </div>
    </div>
  );
}
