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
    // Color transition for tienot_no_aware
    // color1 : rgba(0.6823, 0.6, 0.7569, 1)
    // color2 : rgba(0.1529, 0.1764, 0.1529, 1)

    if (match) {
      const tienotTL = gsap.timeline({
        // paused: true,
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

      tienotTL.to(shaderRef.current.color1, {
        r: 173 / 255,
        g: 155 / 255,
        b: 193 / 255,
      });
      tienotTL.to(
        shaderRef.current.color2,
        {
          r: 80 / 255,
          g: 50 / 255,
          b: 190 / 255,
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

      // Color transition for Serotoninene
      // color1 : rgb(0.7843, 0.4352, 0.3804)
      // color2 : rgba(0.1294, 0.1569, 0.3569, 1)
      const serotoTL = gsap.timeline({
        // paused: true,
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
        r: 0.7843,
        g: 0.4352,
        b: 0.3804,
      });
      serotoTL.to(
        shaderRef.current.color2,
        {
          r: 0.1294,
          g: 0.1569,
          b: 0.3569,
        },
        "<"
      );

      // Color transition for percept imagery
      // color1 : rgb(247, 234, 229)
      // color2 : rgba(33, 32, 46, 1)
      const perceptTL = gsap.timeline({
        // paused: true,
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
    }
  }, [match]);
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
