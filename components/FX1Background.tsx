// Surreal 3D background with animated layers

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FX1Background() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current!.appendChild(renderer.domElement);

    // Surreal animated sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0x1e90ff, metalness: 0.7, roughness: 0.2, emissive: 0xffd700 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Ambient and directional lights
    scene.add(new THREE.AmbientLight(0x222222));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    // Animate
    let frame = 0;
    function animate() {
      frame += 0.01;
      sphere.rotation.y += 0.002;
      sphere.position.x = Math.sin(frame) * 1.5;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      while (mountRef.current?.firstChild)
        mountRef.current.removeChild(mountRef.current.firstChild);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.25 }}
    />
  );
}