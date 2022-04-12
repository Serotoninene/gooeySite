import React, { useEffect, useRef, useState } from "react";
// Three
import * as THREE from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { CubeCamera, useTexture } from "@react-three/drei";
// Shaders
import DistortedMaterial from "../Shaders/distortShader/DistortedMaterial";
// Assets
import feuxRouges from "../../Assets/Images/feux_rouges.jpg";
import eliott from "../../Assets/Images/eliott.jpg";
// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function DistortedSphere(props) {
  const meshRef = useRef();
  const sphereShaderRef = useRef();
  const [followMouse, setFollowMouse] = useState();

  const { viewport } = useThree();

  useFrame(({ clock, mouse }, delta) => {
    // Sending the time into the uniform
    sphereShaderRef.current.time = clock.getElapsedTime();

    // Controling the sphere with the mouse after the heroBanner
    // Damped Values for x and y
    let dampedX = THREE.MathUtils.damp(
      meshRef.current.position.x,
      -mouse.x * viewport.width,
      0.9,
      delta
    );
    let dampedY = THREE.MathUtils.damp(
      meshRef.current.position.y,
      -mouse.y * viewport.height,
      0.9,
      delta
    );

    // I damp the going back to center when back in the herobanner
    let dampedCenterX = THREE.MathUtils.damp(
      meshRef.current.position.x,
      0,
      0.99,
      delta
    );
    let dampedCenterY = THREE.MathUtils.damp(
      meshRef.current.position.y,
      0,
      0.99,
      delta
    );

    // And i set the position of the mesh
    followMouse
      ? meshRef.current.position.set(dampedX, dampedY, -4.5)
      : meshRef.current.position.set(dampedCenterX, dampedCenterY, -4.5);
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

    gsap.to(meshRef.current.position, {
      x: 0,
      y: 0,
      z: -6.5,
      onComplete: () => {
        setFollowMouse(true);
      },
      onReverseComplete: () => {
        setFollowMouse(false);
      },
      scrollTrigger: {
        trigger: "#Herobanner",
        start: "top top",
        end: "center top",
        scrub: 1,
        id: "distorted Sphere",
      },
    });
  }, []);

  return (
    <CubeCamera resolution={127} near={1} far={16}>
      {(texture) => (
        <mesh position={[0, 0, 0]} ref={meshRef}>
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

{
  /* <mesh ref={meshRef}>
      <sphereBufferGeometry args={[2.5, 64, 64]} />
      <MeshDistortMaterial
        ref={meshMaterialRef}
        attach="material"
        distort={opts.distortion}
        speed={2}
        color={new THREE.Color("#0D110D")}
        side={THREE.DoubleSide}
      />
    </mesh> */
}
