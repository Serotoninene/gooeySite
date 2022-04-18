import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CameraAnimation() {
  const { camera } = useThree();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(camera.position, {
      z: 8,
      duration: 1,
      delay: 1,
      ease: Power3.easeInOut,
    });
  }, []);
  return null;
}
