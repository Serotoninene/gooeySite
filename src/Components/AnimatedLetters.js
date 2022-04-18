import React, { useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

const AnimatedLetters = ({ title, trigger, startTrigger, disable }) => {
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

    // Version only to (init position in CSS)
    tl.to(lettersRef.current, {
      y: 0,
      rotate: 0,
      stagger: 0.02,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    return () => {
      tl.reverse();
      tl.kill();
    };
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
            transform: "translate(0, 400%)",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
