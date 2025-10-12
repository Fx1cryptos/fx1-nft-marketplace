// Simple 3D rotating card (could be Three.js or CSS-based for performance)

import { useRef, useEffect } from "react";

export default function RotatingNFTCard({ imageUrl, title }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.4;
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateY(${angle}deg)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {};
  }, []);

  return (
    <div ref={cardRef} className="bg-gradient-to-br from-blue-800 via-black to-yellow-700 rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform duration-500 ease-in-out"
      style={{ perspective: "600px", minHeight: 300 }}>
      <img src={imageUrl} alt={title} className="w-44 h-44 object-cover rounded-lg mb-2" />
      <span className="text-lg font-semibold text-yellow-200">{title}</span>
    </div>
  );
}