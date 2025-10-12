// Social feed stub - can be expanded with backend integration (e.g. Supabase)

import { useState } from "react";

const demoPosts = [
  {
    user: "fx1_fashionista",
    avatar: "/fx1-logo.png",
    content: "Just minted my surreal wearable! #FX1 #NFTFashion",
    image: "/demo-nft-1.png",
    likes: 12,
  },
  {
    user: "metastyle",
    avatar: "/fx1-logo.png",
    content: "Check out my digital wardrobe! 🚀",
    image: "/demo-nft-2.png",
    likes: 7,
  },
];

export default function SocialFeed() {
  const [posts, setPosts] = useState(demoPosts);

  function handleLike(idx) {
    setPosts((posts) =>
      posts.map((p, i) => i === idx ? { ...p, likes: p.likes + 1 } : p)
    );
  }

  return (
    <div className="bg-black bg-opacity-50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-blue-300 mb-4">Community Feed</h2>
      <ul className="space-y-6">
        {posts.map((post, idx) => (
          <li key={idx} className="flex gap-4 items-center">
            <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full border-2 border-yellow-400" />
            <div>
              <div className="font-bold text-yellow-300">{post.user}</div>
              <div className="text-white">{post.content}</div>
              {post.image && <img src={post.image} alt="NFT" className="w-24 h-24 rounded mt-2" />}
              <button
                className="mt-2 px-4 py-1 bg-blue-600 rounded text-white hover:bg-blue-800"
                onClick={() => handleLike(idx)}
              >
                👍 Like ({post.likes})
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}