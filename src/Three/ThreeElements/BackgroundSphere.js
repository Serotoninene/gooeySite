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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const colorTransition = (el, project, color1, color2, color3, start) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${project}`,
      start: start ? start : "center bottom",
      toggleActions: "play none none reverse",
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
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Need to verify if we're on the hP, if not, the colors
    // change on the about page as well, and it's weird
    if (match) {
      // Transition just for the contact form
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
