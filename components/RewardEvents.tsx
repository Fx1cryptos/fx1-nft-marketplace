import React from "react";

export default function RewardEvents() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 mb-8 text-white">
      <h2 className="text-2xl font-bold text-yellow-400 mb-3">Special Reward Events</h2>
      <ul className="space-y-2">
        <li>🎉 <span className="font-bold text-blue-300">Airdrop Fridays:</span> Random active users get surprise $FDH drops.</li>
        <li>🏅 <span className="font-bold text-purple-300">Milestone Badges:</span> Reach 100 Followers → Badge + <span className="text-yellow-400">50 $FDH</span></li>
        <li>🪙 1st NFT Minted → Badge + <span className="text-yellow-400">100 $FDH</span></li>
        <li>💸 1st Sale → Bonus reward</li>
        <li>✨ Level-ups unlock visual effects & bonuses</li>
      </ul>
    </section>
  );
}