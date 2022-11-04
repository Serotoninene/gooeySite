import { useState } from "react";
// Utilitaries
import AnimatedWords from "./AnimatedWords";

export default function () {
  const [anim, setAnim] = useState(false);

  return (
    <div id="Herobanner" className="flex align-center relative">
      <h1>
        <AnimatedWords
          text="Hello, I'm Alex, frontend dev"
          delay={1}
          anim={anim}
          setAnim={setAnim}
          herobanner={true}
        />
      </h1>
    </div>
  );
}
