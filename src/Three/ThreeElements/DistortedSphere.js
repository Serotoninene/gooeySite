import React, { useEffect, useRef } from "react";
// Three
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { CubeCamera } from "@react-three/drei";
// Shaders
import DistortedMaterial from "../Shaders/distortShader/DistortedMaterial";
// wouter
import { useRoute } from "wouter";
// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function DistortedSphere(props) {
  const meshRef = useRef();
  const sphereShaderRef = useRef();
  const [match, param] = useRoute("/");

  const { viewport } = useThree();

  useFrame(({ clock, mouse }, delta) => {
    // Sending the time into the uniform
    sphereShaderRef.current.time = clock.getElapsedTime();

    // Controling the sphere with the mouse after the heroBanner
    // Damped Values for x and y
    let dampedX = THREE.MathUtils.damp(
      meshRef.current.position.x,
      (mouse.x * viewport.width) / 5,
      0.9,
      delta
    );
    let dampedY = THREE.MathUtils.damp(
      meshRef.current.position.y,
      (mouse.y * viewport.height) / 5,
      0.9,
      delta
    );

    // let dampedFrequency = THREE.MathUtils.damp(
    //   1 - Math.abs(mouse.x),
    //   sphereShaderRef.current.distortionFrequency,
    //   0.9,
    //   delta
    // );

    // let dampedIntensity = THREE.MathUtils.damp(
    //   0.5 - mouse.x,
    //   sphereShaderRef.current.distortionIntensity,
    //   0.5,
    //   delta
    // );

    meshRef.current.position.x = dampedX;
    meshRef.current.position.y = dampedY;
    // let inversedX = 1 - Math.abs(mouse.x);
    // let inversedY = 1 - Math.abs(mouse.y);

    // // sphereShaderRef.current.distortionFrequency = dampedFrequency;
    // sphereShaderRef.current.distortionIntensity = THREE.MathUtils.lerp(
    //   sphereShaderRef.current.distortionIntensity,
    //   inversedX * inversedY,
    //   0.7
    // );
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#MainContainer",
        end: "bottom bottom",
        id: "sphere movemnt",
        scrub: true,
      },
    });

    // The mesh gets more and more distorted through the page (tl goes from top to bottom of the homepage)
    tl.to(sphereShaderRef.current, {
      distortionFrequency: 1.14,
      distortionIntensity: 0.27,
      distortionSpeed: 0.3,
    });

    match &&
      gsap.to(meshRef.current.position, {
        x: 0,
        y: 0,
        z: -6.5,
        scrollTrigger: {
          trigger: "#Herobanner",
          start: "top top",
          end: "center top",
          scrub: 1,
          id: "distorted Sphere",
        },
      });
  }, [match]);

  return (
    <CubeCamera resolution={127} near={1} far={16}>
      {(texture) => (
        <mesh position={[0, 0, -2.5]} ref={meshRef}>
          <sphereBufferGeometry args={[2.5, 148, 148]} />
          <distortedMaterial
            ref={sphereShaderRef}
            uniforms-uCube-value={texture}
            // uniforms-uDistortionIntensity-value={data.uDistortionIntensity}
            // uniforms-uDistortionFrequency-value={data.uDistortionFrequency}
          />
        </mesh>
      )}
    </CubeCamera>
  );
}
