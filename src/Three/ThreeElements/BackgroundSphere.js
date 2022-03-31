import React, { useRef, useContext } from "react";
// Three
import * as THREE from "three";
// R3F + DREI
import { useFrame } from "@react-three/fiber";
// Shaders
import vertex from "../Shaders/backgroundShader/vertex.glsl";
import fragment from "../Shaders/backgroundShader/fragment.glsl";
// Context
import DatUiProvider, {
  DatUiContext,
} from "../../Utilitaries/Context/DatUiContext";

export default function BackgroundSphere(props) {
  const { data } = props;
  const shaderRef = useRef();

  useFrame(({ clock }) => {
    shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh position={[0, 0, 0]} scale={[10, 10, 10]}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <shaderMaterial
        ref={shaderRef}
        args={[
          {
            uniforms: {
              uTime: { value: 0 },
              uColor1: { value: new THREE.Color(data.uColor1) },
              uColor2: { value: new THREE.Color(data.uColor2) },
              uColor3: { value: new THREE.Color(data.uColor3) },
            },
            vertexShader: vertex,
            fragmentShader: fragment,
          },
        ]}
        side={THREE.BackSide}
      />
    </mesh>
  );
}
