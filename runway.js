import { fetchZoraNFTs } from "./zoraApi";

export const getRunwayCollection = async () => {
  const nfts = await fetchZoraNFTs();
  return nfts.map(nft => ({
    id: nft.token.tokenId,
    name: nft.token.name || "Runway Piece",
    image: nft.token.image || nft.token.metadata?.image,
    description: nft.token.description || "Onchain Fashion Art",
  }));
};
