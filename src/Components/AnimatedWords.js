import React, { createRef, useCallback, useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";

export default function AnimatedWords(props) {
  const {
    trigger,
    startTrigger,
    text,
    disable,
    delay,
    actionsToggled,
    endTrigger,
    marker,
  } = props;
  const words = text.split(" ");
  const wordsRef = useRef([]);

  const handleRef = useCallback((el, idx) => {
    wordsRef.current[idx] = el;
  }, []);

  useEffect(() => {
    const tl = trigger
      ? gsap.timeline({
          scrollTrigger: {
            trigger: `${trigger}`,
            start: `top ${startTrigger}`,
            end: `bottom ${endTrigger}`,
            id: `${words[0]}`,
            toggleActions: `${
              actionsToggled ? actionsToggled : "play none none reverse"
            }`,
          },
        })
      : gsap.timeline();

    disable && tl.kill();

    tl.to(wordsRef.current, {
      y: 0,
      stagger: 0.05,
      delay: delay ? delay : 0,
      ease: Power3.easeOut,
    });

    return () => {
      tl.kill();
    };
  });
  return (
    <>
      {words.map((word, idx) => (
        <span key={idx} style={{ display: "inline-block", overflow: "hidden" }}>
          <span
            ref={(e) => handleRef(e, idx)}
            className="animatedLetter"
            style={{
              display: "inline-block",
              transform: "translate(0, 100%)",
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}
