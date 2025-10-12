const quests = [
  { challenge: "👕 Outfit Challenge", reward: "+200 $FDH + badge" },
  { challenge: "🎨 Collab Quest", reward: "Bonus for both creators" },
  { challenge: "🌍 Metaverse Walk", reward: "Earn small $FDH" },
];

const lootBoxes = [
  { name: "Wardrobe Box", description: "Random wearable, milestone reward" },
  { name: "Onchain Summer Drop", description: "Seasonal event, rare items" },
];

export default function Quests() {
  return (
    <section className="bg-black bg-opacity-70 p-8 rounded-xl mt-8">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">Fashion Quests</h2>
      <ul className="mb-6 space-y-2">
        {quests.map((q, i) => (
          <li key={i} className="flex justify-between">
            <span className="text-blue-300">{q.challenge}</span>
            <span className="text-purple-300">{q.reward}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold text-blue-200 mb-2">Wardrobe Boxes</h3>
      <ul className="space-y-2">
        {lootBoxes.map((box, i) => (
          <li key={i} className="flex flex-col">
            <span className="text-yellow-300 font-bold">{box.name}</span>
            <span className="text-blue-100">{box.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
