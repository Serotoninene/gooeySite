import React, { useEffect, useRef } from "react";
// Three
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// Gsap
import gsap, { Power0, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Components
import DistortedSphere from "../ThreeElements/DistortedSphere";
import BackgroundSphere from "../ThreeElements/BackgroundSphere";

export default function HPScene(props) {
  const secondMeshRef = useRef();
  const { camera } = useThree();
  camera.lookAt(2, 2, 0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useFrame(({ clock }) => {});

  return (
    <>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[5, 5, 5]} />
      <DistortedSphere {...props} />
      <BackgroundSphere {...props} />
    </>
  );
}
