const ZORA_CONTRACT = "0x9b889aa4f3da5e96ceab76a4e2be68137a03f29d";

export const fetchZoraNFTs = async () => {
  try {
    const response = await fetch(
      `https://api.zora.co/v1/collections/${ZORA_CONTRACT}/tokens`
    );
    const data = await response.json();
    return data.tokens || [];
  } catch (error) {
    console.error("Error fetching Zora NFTs:", error);
    return [];
  }
};
