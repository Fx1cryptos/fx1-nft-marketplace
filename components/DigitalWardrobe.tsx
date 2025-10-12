import React from "react";

const wearables = [
  { name: "Glowing Jacket", rarity: "Legendary", sp: 200, image: "/glowing-jacket.png" },
  { name: "Cyber Boots", rarity: "Epic", sp: 100, image: "/cyber-boots.png" },
  { name: "Neon Glasses", rarity: "Rare", sp: 50, image: "/neon-glasses.png" },
];

export default function DigitalWardrobe() {
  return (
    <section className="bg-black bg-opacity-60 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-300 mb-3">👗 FX1 Digital Wardrobe</h2>
      <div className="flex flex-wrap gap-6">
        {wearables.map((w, i) => (
          <div key={i} className="bg-gradient-to-br from-blue-800 via-black to-yellow-700 rounded-lg p-4 text-center w-48">
            <img src={w.image} alt={w.name} className="w-32 h-32 mx-auto mb-2 rounded-lg border-4 border-yellow-400" />
            <div className="font-bold text-yellow-300">{w.name}</div>
            <div className={`text-${w.rarity === "Legendary" ? "purple" : w.rarity === "Epic" ? "blue" : "white"}-400`}>{w.rarity}</div>
            <div className="text-white">Style Points: <span className="font-bold">{w.sp}</span></div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-yellow-400">
        Legendary wearables grant bonus multipliers! E.g., glowing jacket = +10% daily boost.
      </div>
    </section>
  );
}
