import React from "react";
// Shaders
import vertexShader from "../Shaders/backgroundShader/vertex.glsl";
import fragmentShader from "../Shaders/backgroundShader/fragment.glsl";

export default function BackgroundSphere() {
  console.log(vertexShader);
  return (
    <mesh position={[-2.5, 0, -2]}>
      <sphereBufferGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color={"#FF0000"} />
    </mesh>
  );
}
