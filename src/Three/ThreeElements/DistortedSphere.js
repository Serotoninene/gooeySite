import React, { useEffect, useRef } from "react";
// Three
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { CubeCamera, MeshDistortMaterial } from "@react-three/drei";
// Shaders
import vertex from "../Shaders/distortShader/vertex.glsl";
import fragment from "../Shaders/distortShader/fragment.glsl";
// Gsap
import gsap, { Power0, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function DistortedSphere(props) {
  const { data } = props;
  const meshRef = useRef();
  const sphereShaderRef = useRef();

  let animatedValues = {
    uDistortionFrequency: 0.0,
  };
  const foo = { bar: 0 };

  const { camera } = useThree();
  camera.lookAt(2, 2, 0);

  useFrame(({ clock }) => {
    sphereShaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#MainContainer",
        id: "3D Timeline",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.to(meshRef.current.position, {
      x: 2.5,
      y: 0,
      z: -2.5,
    });

    tl.to(sphereShaderRef.current.uniforms.uDistortionFrequency, {
      value: 1.5,
      ease: Power3.easeIn,
      onUpdate: () => {
        console.log(sphereShaderRef.current.uniforms.uDistortionFrequency);
      },
    });
  }, []);

  useFrame(() => {});

  return (
    <CubeCamera args={[0.1, 100, 512]}>
      {(texture) => (
        <mesh position={[0, 0, 0]} ref={meshRef}>
          <sphereBufferGeometry args={[2, 64, 64]} />
          <shaderMaterial
            ref={sphereShaderRef}
            args={[
              {
                uniforms: {
                  uCube: { value: texture },
                  uTime: { value: 0 },
                  uDistortionIntensity: { value: data.uDistortionIntensity },
                  uDistortionSpeed: { value: data.uDistortionSpeed },
                  uDistortionFrequency: {
                    value: 0.3,
                  },
                },
                vertexShader: vertex,
                fragmentShader: fragment,
              },
            ]}
            uniformsNeedUpdate={true}
            side={THREE.DoubleSide}
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
