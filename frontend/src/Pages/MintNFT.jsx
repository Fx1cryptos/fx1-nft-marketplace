import React, { useState } from "react";

/**
 * Basic client-side UI for minting metadata.
 * For production: upload to IPFS, call your smart contract deploy/mint methods.
 */

export default function MintNFT(){
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // TODO: upload to IPFS + call contract (via ethers/hardhat)
    // Example flow:
    // 1. upload file to IPFS (Pinata/Infura/Arweave)
    // 2. create metadata JSON, upload
    // 3. call contract mint(metadataURI)
    setTimeout(()=>{ alert("Stub: Mint flow not implemented. Hook to backend/contract."); setProcessing(false); }, 800);
  };

  return (
    <div>
      <div className="card">
        <h2>Mint NFT</h2>
        <p className="small">Create a wearable or art piece. This UI only prepares metadata locally — add your IPFS + contract minting logic to make it live.</p>
        <form onSubmit={submit} style={{display:"grid", gap:10, marginTop:12}}>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
          <textarea placeholder="Description" rows="4" value={desc} onChange={e=>setDesc(e.target.value)} />
          <input type="file" onChange={e=>setFile(e.target.files && e.target.files[0])} />
          <div style={{display:"flex", gap:8}}>
            <button className="btn" disabled={processing}>{processing ? "Processing..." : "Prepare & Upload"}</button>
            <button type="button" className="btn secondary" onClick={()=>{ setName(""); setDesc(""); setFile(null); }}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
            }
