import { Suspense } from "react";
// R3F + Drei
import { Canvas } from "@react-three/fiber";
import CameraAnimation from "../Camera/CameraAnimation";
// Framer motion
import { motion } from "framer-motion";

export default function CanvasContainer(props) {
  const { loading } = props;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
      className="CanvasContainer fixed"
      key="l"
    >
      <Canvas camera={{ fov: 75, position: [0, 0, 7] }}>
        <CameraAnimation />
        {/* <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer> */}
        <Suspense fallback={null}>{props.children}</Suspense>
      </Canvas>
    </motion.div>
  );
}
