import { useEffect, useContext, useRef, useState, Suspense } from "react";
// Gsap
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utilitaries
import splitLines from "../Utilitaries/Tools/splitLines";

export default function () {
  const heroTextRef = useRef();

  useEffect(() => {
    console.log(heroTextRef.current);
    gsap.registerPlugin(ScrollTrigger);
    const heroTL = gsap.timeline({
      paused: true,
    });

    heroTL.play();

    // Fragment the title into letters
    splitLines(
      heroTextRef.current,
      "<span class='hidden inlineBlock'>",
      "</span>",
      "heroWords"
    );

    const heroWords = gsap.utils.toArray("#Herobanner .heroWords");
    heroTL.set(heroWords, {
      yPercent: 200,
    });

    heroTL.to(heroWords, {
      yPercent: 0,
      stagger: 0.05,
      delay: 1,
    });
  }, []);

  return (
    <div>
      <div id="Herobanner" className="flex justify-center align-center">
        <h1 ref={heroTextRef}> Lorem, Maxi Ipsum lorem </h1>
      </div>
    </div>
  );
}
