import React from "react";
// Three
import { OrbitControls } from "@react-three/drei";
// Components
import DistortedSphere from "../ThreeElements/DistortedSphere";
import BackgroundSphere from "../ThreeElements/BackgroundSphere";

import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function HPScene(props) {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
      <EffectComposer>
        <Noise
          blendFunction={BlendFunction.OVERLAY}
          premultiply
          opacity={0.5}
        />
      </EffectComposer>

      <DistortedSphere {...props} />
      <BackgroundSphere {...props} />
    </>
  );
}
