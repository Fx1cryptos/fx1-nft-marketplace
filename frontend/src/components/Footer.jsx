import React from "react";
export default function Footer(){
  return (
    <footer>
      <div style={{maxWidth:1100, margin:"0 auto"}}>
        <div>© {new Date().getFullYear()} FX1 Digital Hubs · Built on Base · Ticker: $FDH</div>
        <div style={{fontSize:12, color:"var(--muted)", marginTop:6}}>
          Built for creators — remember to secure your private keys. For production, move points & referral handling to your server.
        </div>
      </div>
    </footer>
  );
}
