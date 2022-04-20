import { useEffect, useContext, useRef, useState, Suspense } from "react";
// Utilitaries
import AnimatedWords from "./AnimatedWords";

export default function () {
  const herobanner = true;
  const [anim, setAnim] = useState(false);

  return (
    <div id="Herobanner" className="flex align-center relative">
      <h1>
        <AnimatedWords
          text="Hello, I'm Alex, frontend dev"
          delay={1}
          anim={anim}
          setAnim={setAnim}
          herobanner
        />
      </h1>
    </div>
  );
}
