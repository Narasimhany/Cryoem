import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Generate Cryo-EM style density map (worm-like geometry)
function CryoEMDensity() {
  const group = useRef();

  // Rotation animation
  useFrame(() => {
    group.current.rotation.y += 0.003;
    group.current.rotation.x += 0.0015;
  });

  const particles = [];
  const segments = 240;          // More segments = higher density
  const blobsPerSegment = 12;    // Number of blobs around each curve
  const baseRadius = 0.23;       // Tube thickness

  for (let i = 0; i < segments; i++) {
    const t = i / segments;

    // Complex EM-like curved path
    const angle1 = t * Math.PI * 8;
    const angle2 = t * Math.PI * 4;

    const x = Math.sin(angle1) * 2.2 + Math.cos(angle2) * 0.8;
    const y = Math.cos(angle1 * 0.7) * 2.4;
    const z = Math.sin(angle2 * 1.2) * 1.5;

    // Gradient color from yellow → green → teal
    const color = t < 0.33
      ? "#d9ff42"       // yellow-green
      : t < 0.66
      ? "#36d67a"       // bright green
      : "#16b6a3";      // teal

    // Blobby cloud around the path
    for (let j = 0; j < blobsPerSegment; j++) {
      const angle = (j / blobsPerSegment) * Math.PI * 2;

      const bx = x + Math.cos(angle) * 0.3 * (Math.random() * 1.4);
      const by = y + Math.sin(angle) * 0.3 * (Math.random() * 1.4);
      const bz = z + (Math.random() - 0.5) * 0.4;

      particles.push(
        <mesh
          key={`${i}-${j}`}
          position={[bx, by, bz]}
        >
          <sphereGeometry
            args={[baseRadius + Math.random() * 0.18]}
          />
          <meshStandardMaterial
            color={color}
            roughness={0.75}
            metalness={0.05}
          />
        </mesh>
      );
    }
  }

  return <group ref={group}>{particles}</group>;
}

export default function ProteinDensity() {
  return (
    <div style={{ width: "100%", height: "320px" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <CryoEMDensity />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
