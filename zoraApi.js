const ZORA_CONTRACT = "0x24c42adfb620f3835fcb31fbdf3c1773fac76970";

export const fetchZoraNFTs = async (contract = ZORA_CONTRACT) => {
  try {
    const url = `https://api.zora.co/v1/collections/${contract}/tokens`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Optional: include API key if you add one later
        // "Authorization": `Bearer ${process.env.ZORA_API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.tokens || [];
  } catch (error) {
    console.error("❌ Error fetching Zora NFTs:", error);
    return [];
  }
};
