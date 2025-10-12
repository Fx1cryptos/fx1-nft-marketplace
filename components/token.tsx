import Head from "next/head";
import FDHUtility from "../components/FDHUtility";
import Rewards from "../components/Rewards";

export default function TokenPage() {
  // Example token data (replace with live API)
  const tokenData = {
    price: "0.076",
    marketCap: "1,420,000",
    supply: "21,000,000",
    holders: 3290,
  };

  return (
    <div className="min-h-screen bg-black bg-gradient-to-r from-blue-900 via-purple-900 to-yellow-900 text-white">
      <Head>
        <title>$FDH Token • FX1 Digital Hubs</title>
      </Head>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold text-yellow-300 mb-6">$FDH Token</h1>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-800 to-purple-800">
            <div className="text-lg text-blue-200 font-bold">Price</div>
            <div className="text-2xl text-yellow-400 font-extrabold">${tokenData.price}</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-800 to-yellow-800">
            <div className="text-lg text-blue-200 font-bold">Market Cap</div>
            <div className="text-2xl text-yellow-400 font-extrabold">${tokenData.marketCap}</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-800 to-yellow-800">
            <div className="text-lg text-blue-200 font-bold">Supply</div>
            <div className="text-xl text-yellow-400 font-extrabold">{tokenData.supply}</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-800 to-blue-800">
            <div className="text-lg text-blue-200 font-bold">Holders</div>
            <div className="text-xl text-yellow-400 font-extrabold">{tokenData.holders}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="https://app.rainbow.me/swap" target="_blank" className="btn-primary">Buy $FDH</a>
          <a href="https://basescan.org/token/0x..." target="_blank" className="btn-secondary">View Chart</a>
          <a href="/claim" className="btn-primary">Claim Rewards</a>
        </div>
        <FDHUtility />
        <Rewards />
      </div>
    </div>
  );
}
