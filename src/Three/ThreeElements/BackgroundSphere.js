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

export default function BackgroundSphere(props) {
  const { data } = props;
  const shaderRef = useRef();
  const meshRef = useRef();
  const [match, params] = useRoute("/");
  useFrame(({ clock, delta }) => {
    shaderRef.current.time = clock.getElapsedTime();
    // meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Need to verify if we're on the hP, if not, the colors change on the about page as well, and it's weird

    const tienotTL = gsap.timeline({
      defaults: {
        ease: Power3.easeIn,
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: ".project0",
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    //Color transition for tienot
    tienotTL.to(shaderRef.current.color1, {
      r: 173 / 255,
      g: 155 / 255,
      b: 193 / 255,
    });
    tienotTL.to(
      shaderRef.current.color2,
      {
        r: 29 / 255,
        g: 51 / 255,
        b: 128 / 255,
      },
      "<"
    );
    tienotTL.to(
      shaderRef.current.color3,
      {
        r: 107 / 255,
        g: 107 / 255,
        b: 202 / 255,
      },
      "<"
    );
    !match && tienotTL.kill();

    // Color transition for Serotoninene
    const serotoTL = gsap.timeline({
      defaults: {
        ease: Power3.easeIn,
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: ".project1",
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });
    serotoTL.to(shaderRef.current.color1, {
      r: 200 / 255,
      g: 111 / 255,
      b: 97 / 255,
    });
    serotoTL.to(
      shaderRef.current.color2,
      {
        r: 33 / 255,
        g: 40 / 255,
        b: 136 / 255,
      },
      "<"
    );
    !match && serotoTL.kill();

    // Color transition for percept imagery
    const perceptTL = gsap.timeline({
      defaults: {
        ease: Power3.easeIn,
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: ".project2",
        start: "center bottom",
        toggleActions: "play none none reverse",
        id: "perceptTL",
      },
    });
    perceptTL.to(shaderRef.current.color1, {
      r: 244 / 255,
      g: 234 / 255,
      b: 229 / 255,
    });
    perceptTL.to(
      shaderRef.current.color2,
      {
        r: 71 / 255,
        g: 138 / 255,
        b: 242 / 255,
      },
      "<"
    );
    !match && perceptTL.kill();

    // Transition for the last part : back to the first colors
    const contactTl = gsap.timeline({
      defaults: {
        ease: Power3.easeIn,
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: ".project2",
        start: "bottom center",
        toggleActions: "play none none reverse",
        id: "ContactTl",
      },
    });
    contactTl.to(shaderRef.current.color1, {
      r: 21 / 255,
      g: 50 / 255,
      b: 136 / 255,
    });
    contactTl.to(
      shaderRef.current.color2,
      {
        r: 21 / 255,
        g: 50 / 255,
        b: 136 / 255,
      },
      "<"
    );
    contactTl.to(
      shaderRef.current.color3,
      {
        r: 206 / 255,
        g: 206 / 255,
        b: 235 / 255,
      },
      "<"
    );
    !match && contactTl.kill();
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
