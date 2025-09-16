import React from 'react';

function MintNFT() {
  const mintNFT = async () => {
    alert("Mint function will connect here 🚀");
  };

  return (
    <div>
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
}

export default MintNFT;
