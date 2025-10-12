import React from "react";

export default function WeeklyChallenges() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-extrabold text-yellow-300 mb-3">Weekly Creator Challenges</h2>
      <ul className="space-y-4 text-white">
        <li>
          <span className="font-bold text-blue-300">Top 3 most-engaged posts</span> → <span className="text-yellow-400">500 $FDH each</span>
        </li>
        <li>
          <span className="font-bold text-blue-300">NFT Fashion Challenge:</span> Submit wearable art, top 5 get exclusive NFTs + <span className="text-yellow-400">300 $FDH</span>
        </li>
      </ul>
      <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-lg font-bold shadow hover:bg-yellow-500 transition">
        Submit Your Entry
      </button>
    </section>
  );
}