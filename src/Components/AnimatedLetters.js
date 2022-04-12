import React, { useEffect, useRef } from "react";
// Framer motion
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

const AnimatedLetters = ({
  title,
  trigger,
  startTrigger,
  duration,
  disable,
}) => {
  const wordRef = useRef();
  const lettersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = trigger
      ? gsap.timeline({
          scrollTrigger: {
            trigger: `${trigger}`,
            start: `top ${startTrigger}`,
            toggleActions: "play none none reverse",
            id: title,
          },
        })
      : gsap.timeline();

    disable && tl.kill();

    // Version from To (no init in CSS)
    // tl.fromTo(
    //   lettersRef.current,
    //   { yPercent: 400, rotate: 40 },
    //   {
    //     yPercent: 0,
    //     rotate: 0,
    //     stagger: 0.05,
    //     duration: duration ? duration : 0.15,
    //     ease: Power3.easeOut,
    //     delay: 0.4,
    //   }
    // );

    // Version only to (init position in CSS)
    tl.to(lettersRef.current, {
      y: 0,
      rotate: 0,
      stagger: 0.02,
      // duration: duration ? duration : 0.05,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  return (
    <span
      ref={wordRef}
      className="hidden"
      style={{
        display: "inline-block",
      }}
    >
      {[...title].map((letter, idx) => (
        <span
          key={idx}
          ref={addToRefs}
          className="animatedLetter"
          style={{
            display: "inline-block",
            transform: "translate(0, 200px)",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
