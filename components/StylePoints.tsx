import React from "react";

export default function StylePoints() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-xl p-6 mb-8 text-white">
      <h2 className="text-2xl font-extrabold text-yellow-300 mb-3">Style Points (SP)</h2>
      <ul className="space-y-2">
        <li>100 SP → +5% $FDH rewards</li>
        <li>500 SP → +15% $FDH rewards</li>
        <li>1000 SP → unlocks VIP Fashion Arena</li>
      </ul>
      <div className="mt-3 text-blue-300">Outfit up to earn more rewards!</div>
    </section>
  );
}
