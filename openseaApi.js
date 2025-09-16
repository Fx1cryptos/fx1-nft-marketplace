const WALLET_ADDRESS = "0x17af2b27d43fa612aab0698214ef2c44b08845ee";

export const fetchOpenseaNFTs = async () => {
  try {
    const response = await fetch(
      `https://api.opensea.io/api/v2/chain/base/account/${WALLET_ADDRESS}/nfts`,
      {
        headers: {
          "X-API-KEY": process.env.OPENSEA_API_KEY || "", // optional key
        },
      }
    );
    const data = await response.json();
    return data.nfts || [];
  } catch (error) {
    console.error("Error fetching OpenSea NFTs:", error);
    return [];
  }
};
