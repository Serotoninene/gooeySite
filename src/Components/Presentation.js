import React, { useEffect, useRef } from "react";
// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utils
import AnimatedWords from "./AnimatedWords";

export default function Presentation() {
  return (
    <div id="Presentation" className="flex align-center">
      <p>
        <AnimatedWords
          text="I am a young developer from Toulouse, France, passionate about web
        development and eager to learn"
          trigger="#Presentation"
          startTrigger="center"
          endTrigger="center"
          actionsToggled="play reverse restart reverse"
        />
      </p>
    </div>
  );
}
