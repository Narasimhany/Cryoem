import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Generate a worm-like Cryo-EM density chain
function generateChain(color, seedOffset, positionOffset) {
  const blobs = [];
  const segments = 110;      // number of worm segments
  const tubeRadius = 0.25;   // thickness of the tube
  const curveScale = 2.8;    // overall size of one protein unit

  for (let i = 0; i < segments; i++) {
    const t = i / segments;

    // Curved protein backbones (custom 3D spline-like path)
    const angle = t * Math.PI * 4 + seedOffset;
    const x = Math.sin(angle * 0.8) * curveScale + (Math.random() - 0.5) * 0.15;
    const y = Math.cos(angle * 0.6) * curveScale + (Math.random() - 0.5) * 0.15;
    const z = Math.sin(angle * 1.2) * curveScale * 0.4 + (Math.random() - 0.5) * 0.15;

    blobs.push(
      <mesh
        key={`${seedOffset}-${i}`}
        position={[
          x + positionOffset[0],
          y + positionOffset[1],
          z + positionOffset[2],
        ]}
      >
        <sphereGeometry args={[tubeRadius + (Math.random() * 0.2 - 0.1)]} />
        <meshStandardMaterial color={color} roughness={0.65} metalness={0.1} />
      </mesh>
    );
  }

  return blobs;
}

function ProteinTetramerMesh() {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
      group.current.rotation.x += 0.0015;
    }
  });

  return (
    <group ref={group}>
      {/* Top-right unit */}
      {generateChain("#1d4ed8", 0, [2.2, 1.8, 0])}

      {/* Top-left unit */}
      {generateChain("#60a5fa", 1.3, [-2.2, 1.8, 0])}

      {/* Bottom-left unit */}
      {generateChain("#93c5fd", 2.1, [-2.0, -1.6, 0])}

      {/* Bottom-right unit */}
      {generateChain("#3b82f6", 0.7, [2.0, -1.6, 0])}
    </group>
  );
}

export default function ProteinTetramer() {
  return (
    <div style={{ width: "100%", height: "470px" }}>
      <Canvas camera={{ position: [0, 0, 17], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <ProteinTetramerMesh />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
