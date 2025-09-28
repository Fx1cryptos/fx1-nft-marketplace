import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

/**
 * Simple Metamask connect button using ethers v6 BrowserProvider.
 * On mobile wallets, this will work if the browser has injected wallet.
 * For WalletConnect integration, you'd add WalletConnectProvider here.
 */

export default function WalletConnect(){
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      // detect previously connected wallet
      window.ethereum.request({ method: "eth_accounts" }).then(accounts => {
        if (accounts.length) setAccount(accounts[0]);
      });
    }
  }, []);

  const connect = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask or open this site in a Web3 mobile browser.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAccount(addr);
      // store wallet in localStorage for Profile page
      localStorage.setItem("fx1_wallet", addr);
    } catch (err) {
      console.error(err);
      alert("Connection failed.");
    }
  };

  const short = (a) => a ? `${a.slice(0,6)}...${a.slice(-4)}` : "Connect";

  return (
    <button onClick={connect} className="btn">
      { account ? short(account) : "Connect Wallet" }
    </button>
  );
}
