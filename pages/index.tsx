// Main homepage with hero, NFT grid, social feed, and footer

import Head from "next/head";
import dynamic from "next/dynamic";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NFTGrid from "../components/NFTGrid";
import SocialFeed from "../components/SocialFeed";
import Footer from "../components/Footer";
import Image from "next/image";

const FX1Background = dynamic(() => import("../components/FX1Background"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-yellow-900 text-white overflow-x-hidden">
      <Head>
        <title>FX1 Digital Hubs Marketplace</title>
        <link rel="icon" href="/fx1-logo.png" />
      </Head>
      <FX1Background />
      <header className="flex items-center justify-between px-8 py-6 z-10 relative">
        <div className="flex items-center gap-4">
          <Image src="/fx1-logo.png" alt="FX1 Logo" width={48} height={48} />
          <span className="text-2xl font-bold tracking-wider text-blue-400">FX1 DIGITAL HUBS</span>
        </div>
        <ConnectButton />
      </header>
      <main className="max-w-6xl mx-auto px-8 z-10 relative">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent animate-pulse">
            Styling the Blockchain with NFT Fashion & Onchain Identity
          </h1>
          <p className="text-xl mb-8 text-blue-100">Powered by FX1 Digital Hubs Token ($FDH) on Base</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://zora.co/collections/fx1_hubs" target="_blank" className="btn-primary">🔗 Explore NFTs (Zora)</a>
            <a href="https://app.rainbow.me/swap" target="_blank" className="btn-secondary">💰 Buy $FDH on Base</a>
          </div>
        </section>
        <section className="py-8">
          <NFTGrid />
        </section>
        <section className="py-8">
          <SocialFeed />
        </section>
      </main>
      <Footer />
    </div>
  );
}