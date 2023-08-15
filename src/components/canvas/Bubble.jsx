import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import * as THREE from "three";

function Bubble() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial color="white" transparent opacity={1} />
    </mesh>
  );
}

export default function BubbleCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#fff8eb" map={new THREE.TextureLoader().load("src/assets/bubble.png")} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
