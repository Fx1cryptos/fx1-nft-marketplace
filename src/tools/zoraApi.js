const ZORA_CONTRACT = "0x9b889aa4f3da5e96ceab76a4e2be68137a03f29d";
const ZORA_API_BASE = "https://api.zora.co/v1";

export const fetchZoraNFTs = async (contractAddress = ZORA_CONTRACT) => {
  try {
    const response = await fetch(
      `${ZORA_API_BASE}/collections/${contractAddress}/tokens`
    );
    
    if (!response.ok) {
      throw new Error(`Zora API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.tokens || [];
  } catch (error) {
    console.error("Error fetching Zora NFTs:", error);
    return [];
  }
};

export const fetchZoraCollection = async (contractAddress = ZORA_CONTRACT) => {
  try {
    const response = await fetch(
      `${ZORA_API_BASE}/collections/${contractAddress}`
    );
    
    if (!response.ok) {
      throw new Error(`Zora Collection API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Zora collection:", error);
    return null;
  }
};

export const fetchZoraTokenMetadata = async (contractAddress, tokenId) => {
  try {
    const response = await fetch(
      `${ZORA_API_BASE}/collections/${contractAddress}/tokens/${tokenId}`
    );
    
    if (!response.ok) {
      throw new Error(`Zora Token API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error fetching Zora token metadata:", error);
    return null;
  }
};