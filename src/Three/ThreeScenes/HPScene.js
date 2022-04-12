import React from "react";
// Three
import { OrbitControls } from "@react-three/drei";
// Components
import DistortedSphere from "../ThreeElements/DistortedSphere";
import BackgroundSphere from "../ThreeElements/BackgroundSphere";

export default function HPScene(props) {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[5, 5, 5]} />
      <DistortedSphere {...props} /> <BackgroundSphere {...props} />
    </>
  );
}
