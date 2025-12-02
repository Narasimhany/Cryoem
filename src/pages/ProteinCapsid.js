import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function CryoEMCapsid() {
  const group = useRef();

  // Rotation
  useFrame(() => {
    group.current.rotation.y += 0.003;
    group.current.rotation.x += 0.0015;
  });

  const particles = [];
  const layers = 28;           // More layers = better sphere
  const pointsPerLayer = 55;   // Number of blobs on each latitude
  const radius = 3.1;          // Sphere radius
  const blobSize = 0.32;

  for (let i = 0; i < layers; i++) {
    const phi = (i / layers) * Math.PI; // from 0 → PI

    for (let j = 0; j < pointsPerLayer; j++) {
      const theta = (j / pointsPerLayer) * Math.PI * 2;

      // Base spherical coordinates
      let x = radius * Math.sin(phi) * Math.cos(theta);
      let y = radius * Math.cos(phi);
      let z = radius * Math.sin(phi) * Math.sin(theta);

      // Add EM-style surface noise
      x += (Math.random() - 0.5) * 0.4;
      y += (Math.random() - 0.5) * 0.4;
      z += (Math.random() - 0.5) * 0.4;

      // Coloring regions: orange, green, purple
      const region = Math.floor(((theta + phi) * 7) % 3);

      const color =
        region === 0 ? "#d4550f" :    // orange
        region === 1 ? "#3ba66a" :    // green
        "#6a52b9";                    // purple

      particles.push(
        <mesh
          key={`${i}-${j}`}
          position={[x, y, z]}
        >
          <sphereGeometry args={[blobSize + Math.random() * 0.16]} />
          <meshStandardMaterial
            color={color}
            roughness={0.85}
            metalness={0.05}
          />
        </mesh>
      );
    }
  }

  return <group ref={group}>{particles}</group>;
}

export default function ProteinCapsid() {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <CryoEMCapsid />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
