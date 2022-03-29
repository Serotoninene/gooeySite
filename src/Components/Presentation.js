import React, { useEffect, useRef } from "react";
// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utils
import splitLines from "../Utilitaries/Tools/splitLines";

export default function Presentation() {
  const presentationTextRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    splitLines(
      presentationTextRef.current,
      "<span class= 'hidden inlineBlock'>",
      "</span>",
      "presWords"
    );

    const presTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#Presentation",
        start: "top center",
        end: "bottom bottom",
        id: "Presentation",
        toggleActions: "play none none reverse",
      },
    });

    const presWords = gsap.utils.toArray(".presWords");

    presTL.fromTo(
      presWords,
      {
        yPercent: 200,
      },
      {
        yPercent: 0,
        stagger: 0.01,
      }
    );

    gsap.fromTo(
      presWords,
      { yPercent: 0 },
      {
        yPercent: -200,
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#Presentation",
          start: "bottom bottom",
          end: "top+=6% top",
          id: "Presentation leaving",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div id="Presentation">
      <h2 ref={presentationTextRef}>
        Young developer from Toulouse, France, passionate about web development
        and eager to learn
      </h2>
    </div>
  );
}
