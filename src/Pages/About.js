import React, { useEffect, useRef } from "react";
// Wouter
import { useLocation, useRoute } from "wouter";
// Framer-motion
import { AnimatePresence } from "framer-motion";
// Gsap
import gsap, { Power1, Power3 } from "gsap";
// Components
import AnimatedLetters from "../Components/AnimatedLetters";
// Utils
import splitLines from "../Utilitaries/Tools/splitLines";
// Assets
import feuxRouges from "../Assets/Images/feux_rouges.jpg";
import eliott from "../Assets/Images/eliott.jpg";
import fenetre from "../Assets/Images/fenetre.jpg";

export default function About(props) {
  const bottomParagraphRef = useRef();
  const [match, params] = useRoute("/about");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const imgs = gsap.utils.toArray("#About img");
    const imgContainers = gsap.utils.toArray("#About .picture");
    const tl = gsap.timeline({
      defaults: {
        ease: Power3.easeOut,
      },
      delay: 0.7,
    });

    tl.fromTo(
      imgs,
      {
        scale: 3.2,
      },
      {
        scale: 1,
        stagger: 0.1,
        duration: 0.5,
      },
      "<"
    );

    tl.fromTo(
      imgContainers,
      {
        height: 0,
      },
      {
        height: 130,
        stagger: 0.1,
      },
      "<"
    );

    tl.fromTo(
      bottomParagraphRef.current,
      {
        y: 20,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: Power1.easeOut, duration: 0.3 }
    );
    match && tl.play();
  }, [match]);

  return (
    <AnimatePresence>
      {location === props.path && (
        <div id="About" className="flex align-center">
          <div className="textContainer flex-column justify-between img-fluid relative">
            <div className="firstRow flex  justify-end img-fluid">
              <h2>
                <AnimatedLetters duration={0.4} title={"Lorem"} />{" "}
                <AnimatedLetters duration={0.4} title={"is"} />
              </h2>
            </div>
            <h2 className="row flex justify-between align-center img-fluid ">
              <AnimatedLetters duration={0.4} title={"text"} />{" "}
              <div className="picture">
                <img src={eliott} className="img-fluid" />
              </div>
              <AnimatedLetters duration={0.4} title={"simply"} />{" "}
              <AnimatedLetters duration={0.4} title={"of"} />
            </h2>
            <h2 className="row flex justify-between align-center img-fluid ">
              <AnimatedLetters duration={0.4} title={"dummy"} />{" "}
              <AnimatedLetters duration={0.4} title={"and"} />
              <div className="picture">
                <img src={feuxRouges} className="img-fluid" />
              </div>
              <AnimatedLetters duration={0.4} title={"the"} />{" "}
            </h2>
            <div
              className="bottomParagraphContainer absolute hidden"
              ref={bottomParagraphRef}
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
