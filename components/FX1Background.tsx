import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FX1Background() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current!.appendChild(renderer.domElement);

    // Example: animate a spinning FX1 logo (replace with your SVG/GLTF for production)
    const geometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x9a1aff, emissive: 0x301050, metalness: 0.8, roughness: 0.2 });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      knot.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      renderer.dispose();
      while (mountRef.current?.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}
