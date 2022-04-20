import React from "react";
// Utils
import AnimatedWords from "./AnimatedWords";

export default function Presentation() {
  return (
    <div id="Presentation" className="flex align-center">
      <p>
        <AnimatedWords
          text="I am a young developer from Toulouse, France, passionate about web
        development and design, currently working with reactjs, R3F and gsap"
          trigger="#Presentation"
          startTrigger="75%"
          endTrigger="center"
          actionsToggled="play reverse restart reverse"
          stagger={0.02}
        />
      </p>
    </div>
  );
}
