import React, { useEffect, useRef } from "react";
// Three
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Tetrahedron } from "@react-three/drei";
// Gsap
import gsap, { Power0, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function DistortedSphere() {
  const meshMaterialRef = useRef();
  const secondMeshRef = useRef();
  const meshRef = useRef();
  let opts = {
    distortion: 0,
  };

  const { camera } = useThree();
  camera.lookAt(2, 2, 0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log(meshRef.current);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Herobanner",
        id: "3D Timeline",
        start: "top top",
        endTrigger: "#Presentation",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(meshMaterialRef.current._distort, {
      value: 1,
      ease: Power0.ease,
    });
    tl.to(meshMaterialRef.current.color, {
      r: 0.6,
      g: 0.2,
      b: 0.8,
      ease: Power0.ease,
    });

    // console.log(camera);
    gsap.to(meshRef.current.position, {
      x: 2.5,
      y: 0,
      scrollTrigger: {
        trigger: "#Herobanner",
        start: "center top",
        toggleActions: "play resume none reverse",
      },
    });

    let skillsTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#Skills",
        start: "top-=10% top",
        id: "Skills 3D",
        toggleActions: "play none none reverse",
      },
    });

    // gsap.to(meshRef.current.position, {
    //   x: -2.5,
    //   z: -1.5,
    //   scrollTrigger: {
    //     trigger: "#Skills",
    //     start: "center top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    // skillsTL.to(meshMaterialRef.current._distort, {
    //   value: 0,
    // });
    // skillsTL.to(
    //   meshRef.current.scale,
    //   {
    //     x: 8,
    //     y: 8,
    //     z: 8,
    //     duration: 0.5,
    //     ease: Power3.easeOut,
    //   },
    //   ">0.5"
    // );
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereBufferGeometry args={[2.5, 64, 64]} />
      <MeshDistortMaterial
        ref={meshMaterialRef}
        attach="material"
        distort={opts.distortion}
        speed={2}
        color={new THREE.Color("#161B33")}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
