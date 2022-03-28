import { Suspense, useRef } from "react";
// R3F + Drei
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// Styling
import "./Scss/style.scss";

function Scene() {
  const meshRef = useRef();
  return (
    <mesh ref={meshRef}>
      <octahedronBufferGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
