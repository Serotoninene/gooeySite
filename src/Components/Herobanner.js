import { useEffect, useRef, useState, Suspense } from "react";
// Gsap
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utilitaries
import splitLines from "../Utilitaries/Tools/splitLines";

export default function () {
  const heroTextRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const heroTL = gsap.timeline();

    // Fragment the title into letters
    splitLines(
      heroTextRef.current,
      "<span class='hidden inlineBlock'>",
      "</span>",
      "heroWords"
    );

    const heroWords = gsap.utils.toArray(".heroWords");
    heroTL.set(heroWords, { yPercent: 200 });

    heroTL.to(heroWords, {
      yPercent: 0,
      stagger: 0.1,
      delay: 1,
    });

    gsap.to(
      heroWords,
      // { yPercent: 0 },
      {
        yPercent: -1000,
        stagger: 0.05,
        scrollTrigger: {
          trigger: "#Herobanner",
          start: "top+=20% top",
          id: "Herobanner leaving",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div id="Herobanner">
      <div
        id="Herobanner"
        className="flex justify-center align-center"
        data-scroll
      >
        <h1 ref={heroTextRef}>Lorem, Maxi Ipsum lorem</h1>
      </div>
    </div>
  );
}
