import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

/**
 * Lightweight full-screen 3D background.
 * - Uses Stars from drei for atmospheric particles.
 * - Keep low poly / low count for mobile perf.
 * - Toggle off with localStorage 'fx1_disable_3d' if needed.
 */

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <Stars radius={80} depth={30} count={1000} factor={6} saturation={0.25} fade />
    </>
  );
};

const MetaverseBackground = () => {
  const disabled = typeof window !== "undefined" && window.localStorage.getItem("fx1_disable_3d") === "1";
  if (disabled) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none"
    }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MetaverseBackground;
