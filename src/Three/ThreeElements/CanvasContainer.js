import { Suspense } from "react";
// R3F + Drei
import { Canvas } from "@react-three/fiber";

export default function CanvasContainer(props) {
  return (
    <div className="CanvasContainer fixed">
      <Canvas>
        <Suspense fallback={null}>{props.children}</Suspense>
      </Canvas>
    </div>
  );
}
