import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CameraAnimation(props) {
  const { loading } = props;
  const { camera } = useThree();
  useEffect(() => {
    !loading &&
      gsap.to(camera.position, {
        z: 5,
        duration: 1,
        delay: 1,
        ease: Power3.easeInOut,
      });
  }, []);
  return null;
}
