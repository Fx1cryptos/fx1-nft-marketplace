import Head from "next/head";
import dynamic from "next/dynamic";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const FX1Background = dynamic(() => import("../components/FX1Background"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-black relative min-h-screen text-white">
      <Head>
        <title>FX1 Digital Hubs Marketplace</title>
        <link rel="icon" href="/fx1-logo.png" />
        <meta name="description" content="$FDH Token powers FX1 Digital Hubs" />
      </Head>
      <FX1Background />
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <Image src="/fx1-logo.png" alt="FX1 Logo" width={48} height={48} />
          <h1 className="text-3xl font-bold tracking-wider">FX1 DIGITAL HUBS Marketplace</h1>
        </div>
        <ConnectButton />
      </header>
      <main className="max-w-3xl mx-auto mt-20 bg-gray-900 bg-opacity-80 rounded-xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">$FDH Token</h2>
        <p className="mb-2">Powering the Future of Digital Fashion, Art, and Culture onchain</p>
        <p className="mb-6 text-lg text-purple-300">
          $FDH is the utility and community token at the core of the FX1 DIGITAL HUBS ecosystem — a growing platform dedicated to digital creativity, NFT fashion, and onchain culture.<br />
          <br />
          As a holder of $FDH, you’re not just supporting a project — you’re unlocking early access to a movement.
        </p>
        <hr className="my-6 border-purple-500" />
        <h3 className="text-xl font-semibold mb-2">Why $FDH Matters</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>🔑 <span className="font-bold">Access:</span> Entry to exclusive FX1 experiences — NFT drops, fashion collectibles, interactive gaming, creative tools.</li>
          <li>🎨 <span className="font-bold">Empowerment:</span> Support emerging digital artists and creators, funding a culture-first vision of Web3.</li>
          <li>🧬 <span className="font-bold">Utility:</span> Earn rewards, forge digital wardrobes, play click-to-earn games, and onchain challenges powered by $FDH.</li>
          <li>📦 <span className="font-bold">Future-Proof:</span> Airdrops, early releases, evolving perks for $FDH holders.</li>
        </ul>
      </main>
    </div>
  );
}
