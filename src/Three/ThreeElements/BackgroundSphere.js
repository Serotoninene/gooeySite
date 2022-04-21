import React, { useRef, useEffect } from "react";
// Three
import * as THREE from "three";
// R3F + DREI
import { useFrame } from "@react-three/fiber";
// Shaders
import BackgroundMaterial from "../Shaders/backgroundShader/BackgroundMaterial";
// Wouter
import { useRoute } from "wouter";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

const colorTransition = (el, project, color1, color2, color3, start) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${project}`,
      start: start ? start : "center bottom",
      toggleActions: "play none none reverse",
    },
    defaults: {
      ease: Power3.easeIn,
      duration: 0.5,
    },
  });

  tl.to(el.color1, {
    r: color1.r / 255,
    g: color1.g / 255,
    b: color1.b / 255,
  });

  tl.to(
    el.color2,
    {
      r: color2.r / 255,
      g: color2.g / 255,
      b: color2.b / 255,
    },
    "<"
  );

  color3 &&
    tl.to(
      el.color3,
      {
        r: color3.r / 255,
        g: color3.g / 255,
        b: color3.b / 255,
      },
      "<"
    );

  return tl;
};

export default function BackgroundSphere(props) {
  const { data } = props;
  const shaderRef = useRef();
  const meshRef = useRef();
  const tl = useRef(gsap.timeline());
  const [match, params] = useRoute("/");

  useFrame(({ clock }) => {
    shaderRef.current.time = clock.getElapsedTime();
    // meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Need to verify if we're on the hP, if not, the colors change on the about page as well, and it's weird

    if (match) {
      // Color transition for tienot
      tl.current.add(
        colorTransition(
          shaderRef.current,
          "project0",
          { r: 173, g: 155, b: 193 },
          { r: 29, g: 51, b: 128 },
          { r: 107, g: 107, b: 202 }
        )
      );

      // Color transition for Serotoninene
      tl.current.add(
        colorTransition(
          shaderRef.current,
          "project1",
          { r: 200, g: 111, b: 97 },
          { r: 33, g: 40, b: 136 }
        )
      );

      // Color transition for percept imagery
      tl.current.add(
        colorTransition(
          shaderRef.current,
          "project2",
          { r: 244, g: 234, b: 229 },
          { r: 71, g: 138, b: 242 }
        )
      );
      // Transition for the last part : back to the first colors
      tl.current.add(
        colorTransition(
          shaderRef.current,
          "project2",
          { r: 21, g: 50, b: 136 },
          { r: 21, g: 50, b: 136 },
          { r: 206, g: 206, b: 235 },
          "bottom center"
        )
      );
    }
    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[13, 13, 13]}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <backgroundMaterial
        ref={shaderRef}
        needsUpdate={true}
        side={THREE.BackSide}
        uniforms-uColor1-value={data.uColor1}
        uniforms-uColor2-value={data.uColor2}
        uniforms-uColor3-value={data.uColor3}
      />
    </mesh>
  );
}
