// ==============================
// FX1 Digital Hubs – NFT Fetcher
// ==============================

// Your addresses
const walletAddress = "0x17af2b27d43fa612aab0698214ef2c44b08845ee"; // EVM wallet for OpenSea
const zoraContract = "0x9b889aa4f3da5e96ceab76a4e2be68137a03f29d"; // Zora contract

// Create NFT grid
const nftGrid = document.createElement("div");
nftGrid.id = "nft-grid";
nftGrid.style.display = "grid";
nftGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
nftGrid.style.gap = "20px";
nftGrid.style.margin = "40px auto";
nftGrid.style.maxWidth = "1200px";
document.body.appendChild(nftGrid);

// Fetch from OpenSea
async function fetchOpenSeaNFTs() {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/chain/ethereum/account/${walletAddress}/nfts`
    );
    const data = await res.json();

    if (data.nfts) {
      data.nfts.forEach((nft) => {
        renderNFT(
          nft.image_url,
          nft.name,
          nft.collection || "OpenSea",
          nft.opensea_url || "#"
        );
      });
    }
  } catch (err) {
    console.error("OpenSea fetch error:", err);
  }
}

// Fetch from Zora
async function fetchZoraNFTs() {
  try {
    const res = await fetch(
      `https://api.zora.co/v1/collections/${zoraContract}/tokens`
    );
    const data = await res.json();

    if (data.tokens) {
      data.tokens.forEach((token) => {
        const img = token.token.image || "";
        const name = token.token.name || "Unnamed NFT";
        const collection = token.token.collection?.name || "Zora";
        const link = `https://zora.co/collections/${zoraContract}/${token.token.tokenId}`;
        renderNFT(img, name, collection, link);
      });
    }
  } catch (err) {
    console.error("Zora fetch error:", err);
  }
}

// Render NFTs into styled cards
function renderNFT(img, name, collection, link) {
  const card = document.createElement("div");
  card.style.border = "2px solid #000080"; // Navy Blue
  card.style.borderRadius = "12px";
  card.style.padding = "15px";
  card.style.background = "#f8f8ff"; // Very light background
  card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  card.style.transition = "transform 0.2s";
  card.style.textAlign = "center";

  card.innerHTML = `
    <img src="${img}" alt="${name}" style="width:100%; border-radius:8px; max-height:200px; object-fit:cover;">
    <h3 style="color:#4169e1; font-size:18px; margin:10px 0;">${name}</h3>
    <p style="color:#ffd700; font-weight:bold;">${collection}</p>
    <a href="${link}" target="_blank" style="color:#1a1a1a; text-decoration:none;">🔗 View NFT</a>
  `;

  card.onmouseover = () => (card.style.transform = "scale(1.05)");
  card.onmouseout = () => (card.style.transform = "scale(1)");

  nftGrid.appendChild(card);
}

// Load NFTs from both sources
fetchOpenSeaNFTs();
fetchZoraNFTs();
