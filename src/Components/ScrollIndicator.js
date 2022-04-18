import React, { useEffect, useRef, useState } from "react";
// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// components
import AnimatedLetters from "./AnimatedLetters";

export default function ScrollIndicator() {
  const [scrolling, setScrolling] = useState(true);
  const lineRef = useRef();
  console.log(scrolling);
  useEffect(() => {
    gsap.to(lineRef.current, {
      y: 25,
      scaleY: 0,
      scrollTrigger: {
        trigger: "#Homepage",
        start: "top top",
        end: "top+=100vh top",
        // end: "bottom bottom", // correct end
        scrub: true,
        onLeave: () => {
          setScrolling(false);
        },
        onEnterBack: () => {
          setScrolling(true);
        },
      },
    });
  }, []);
  return (
    <div id="ScrollIndicator" className="fixed flex-column align-center">
      <p>
        {scrolling ? (
          <AnimatedLetters title="Scroll" />
        ) : (
          <AnimatedLetters title="Back" />
        )}
      </p>
      <div ref={lineRef} className="scrollLine"></div>
    </div>
  );
}
