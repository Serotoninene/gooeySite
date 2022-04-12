import React, {
  useEffect
} from "react";
import {
  useThree
} from "@react-three/fiber";
import gsap, {
  Power3
} from "gsap";
import {
  ScrollTrigger
} from "gsap/all";

export default function CameraAnimation() {
  const {
    camera
  } = useThree();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    // gsap.to(camera.position, {
    //   x: -2,
    //   y: 0,
    //   z: -10,
    //   duration: 1,
    //   ease: Power3.easeOut,
    // });

    // tl.to(camera.position, {
    //   z: 3,
    //   scrollTrigger: {
    //     trigger: "#MainContainer",
    //     start: "top top",
    //     end: "bottom bottom",
    //     id: "Camera",
    //     scrub: true,
    //   },
    // });
  }, []);
  return null;
}