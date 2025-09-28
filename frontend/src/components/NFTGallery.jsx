import React, { useEffect, useState } from "react";
import axios from "axios";
import { CONFIG } from "../config";
import NFTCard from "./NFTCard";

/**
 * Fetch NFTs from OpenSea and Zora and display.
 * - Provide owner or collection via props; otherwise use CONFIG defaults.
 * - Note: OpenSea may require an API key and CORS may block direct client calls in some environments.
 * - For production: proxy these calls through your server.
 */

export default function NFTGallery({ owner, collection, limit = 20 }) {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const useOwner = owner || CONFIG.DEFAULT_OWNER || "";
  const useCollection = collection || CONFIG.DEFAULT_COLLECTION || "";

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line
  }, [owner, collection]);

  async function fetchOpenSea() {
    try {
      const params = {
        owner: useOwner || undefined,
        collection: useCollection || undefined,
        limit,
      };
      const url = CONFIG.OPENSEA_API;
      const res = await axios.get(url, { params });
      // OpenSea assets are in res.data.assets
      const assets = res.data && res.data.assets ? res.data.assets : [];
      return assets.map(a => ({
        image: a.image_preview || a.image_url || a.image_thumbnail,
        name: a.name || `${a.asset_contract?.name} #${a.token_id}`,
        description: a.description,
        external_link: a.permalink,
        token_id: a.token_id,
        collection: a.collection?.name,
      }));
    } catch (err) {
      console.warn("OpenSea fetch error", err?.message || err);
      return [];
    }
  }

  async function fetchZora() {
    try {
      // Very simple Zora example: Zora GraphQL needs queries
      const query = `query Tokens($owner: Identity) {
        tokens(input: {filter: {owner: $owner}, limit: ${limit}}) {
          nodes {
            token {
              tokenId
              uri
              image
              name
            }
            tokenContracts {
              name
            }
          }
        }
      }`;
      const variables = { owner: useOwner || null };
      const res = await axios.post(CONFIG.ZORA_API, { query, variables });
      const nodes = res.data?.data?.tokens?.nodes || [];
      return nodes.map(n => ({
        image: n.token.image,
        name: n.token.name || `#${n.token.tokenId}`,
        description: n.token.uri,
        external_link: "",
        token_id: n.token.tokenId,
        collection: n.tokenContracts?.[0]?.name,
      }));
    } catch (err) {
      console.warn("Zora fetch error", err?.message || err);
      return [];
    }
  }

  async function fetchAll() {
    setLoading(true);
    const [os, zora] = await Promise.all([fetchOpenSea(), fetchZora()]);
    const merged = [...os, ...zora].slice(0, limit);
    setNfts(merged);
    setLoading(false);
  }

  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
        <h2>NFTs</h2>
        <button className="btn secondary" onClick={fetchAll}>Refresh</button>
      </div>
      {loading ? <div className="card">Loading NFTs…</div> : (
        nfts.length ? (
          <div className="grid">
            {nfts.map((nft, i) => <NFTCard key={i} nft={nft} />)}
          </div>
        ) : <div className="card small">No NFTs found. Configure DEFAULT_OWNER or DEFAULT_COLLECTION in <code>src/config.js</code>.</div>
      )}
    </div>
  );
                                    }
