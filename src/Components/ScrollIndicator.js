import React, { useEffect, useRef, useState } from "react";
// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// components
import AnimatedLetters from "./AnimatedLetters";

export default function ScrollIndicator() {
  const [scrolling, setScrolling] = useState(true);
  const lineRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(lineRef.current, {
      opacity: 1,
      delay: 1.5,
    });
    tl.to(lineRef.current, {
      y: 25,
      scaleY: 0,
      scrollTrigger: {
        startTrigger: "#Homepage",
        start: "top top",
        end: "bottom bottom", // correct end
        scrub: true,
        onLeave: () => {
          setScrolling(false);
        },
        onEnterBack: () => {
          setScrolling(true);
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id="ScrollIndicator" className="fixed flex-column align-center">
      <p>
        <AnimatedLetters title="Scroll" delay={1.6} end={!scrolling} />
      </p>
      <div ref={lineRef} className="scrollLine"></div>
    </div>
  );
}
