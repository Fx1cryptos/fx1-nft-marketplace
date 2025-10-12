import React from "react";

const demoCreators = [
  { name: "MetaMuse", points: 1200 },
  { name: "CyberStyler", points: 1050 },
  { name: "VirtualVogue", points: 940 },
];

export default function Leaderboard() {
  return (
    <section className="bg-black bg-opacity-70 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-extrabold text-blue-300 mb-2">🏆 Top Creators This Week</h2>
      <ol className="list-decimal pl-6 text-white space-y-2">
        <li><span className="font-bold text-yellow-400">{demoCreators[0].name}</span> – 1st Place: <span className="text-yellow-300">1000 $FDH</span></li>
        <li><span className="font-bold text-yellow-400">{demoCreators[1].name}</span> – 2nd Place: <span className="text-gray-300">750 $FDH</span></li>
        <li><span className="font-bold text-yellow-400">{demoCreators[2].name}</span> – 3rd Place: <span className="text-gray-300">500 $FDH</span></li>
      </ol>
    </section>
  );
}