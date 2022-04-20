import React, { useEffect, useRef, useState } from "react";
// Wouter
import { useLocation, useRoute } from "wouter";
// Framer-motion
import { AnimatePresence } from "framer-motion";
// Gsap
import gsap, { Power1, Power3 } from "gsap";
// Components
import AnimatedLetters from "../Components/AnimatedLetters";
import AnimatedWords from "../Components/AnimatedWords";
// Assets
import feuxRouges from "../Assets/Images/feux_rouges.jpg";
import eliott from "../Assets/Images/eliott.jpg";
import fenetre from "../Assets/Images/fenetre.jpg";
// Utils
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
import AnimatedPictures from "../Components/AnimatedPictures";

export default function About(props) {
  const bottomParagraphRef = useRef();
  const [phoneFormat, setPhoneFormat] = useState(false);
  const [match, params] = useRoute("/about");
  const [location, setLocation] = useLocation();
  const { width } = useWindowSize();

  useEffect(() => {
    width < 775 ? setPhoneFormat(true) : setPhoneFormat(false);
  }, [width]);

  useEffect(() => {
    const anim = gsap.fromTo(
      bottomParagraphRef.current,
      {
        y: 20,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: Power1.easeOut, duration: 0.3, delay: 0.7 }
    );
    match && anim.play();
  }, [match]);

  return (
    <AnimatePresence>
      {location === props.path && (
        <>
          {!phoneFormat ? (
            <div id="About" className="flex align-end relative">
              <div>
                <div className="textContainer flex-column justify-between img-fluid relative">
                  <div className="firstRow flex  justify-end img-fluid">
                    <h2>
                      <AnimatedLetters duration={0.4} title={"My"} />{" "}
                      <AnimatedLetters duration={0.4} title={"thing"} />
                    </h2>
                  </div>
                  <h2 className="row flex justify-between align-center img-fluid ">
                    <AnimatedLetters duration={0.4} title={"is"} />{" "}
                    <AnimatedPictures pic={eliott} order={0} round />
                    <AnimatedLetters duration={0.4} title={"creating"} />{" "}
                    <AnimatedLetters duration={0.4} title={"simple"} />
                  </h2>
                  <h2 className="row flex justify-between align-center img-fluid ">
                    <AnimatedLetters duration={0.4} title={"and"} />{" "}
                    <AnimatedLetters duration={0.4} title={"minimal"} />
                    <AnimatedPictures pic={feuxRouges} order={1} />
                    <AnimatedLetters duration={0.4} title={"stuff"} />{" "}
                  </h2>
                </div>
                <div
                  className="bottomParagraphContainer hidden"
                  ref={bottomParagraphRef}
                >
                  <p>
                    I've been learning web development for 3 years now, focused
                    on reactjs for a year, here are some of the tech I love :
                    reactjs, R3F, gsap, framer-motion, threejs.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div id="About" className="flex-column justify-end">
              <div>
                <h2>
                  <AnimatedWords text="My thing is creating simple and minimal stuff" />
                </h2>
                <div
                  className="bottomParagraphContainer"
                  ref={bottomParagraphRef}
                >
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
