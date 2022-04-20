import React, { useEffect, useRef, useState } from "react";
// Gsap
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Component
import AnimatedLetters from "./AnimatedLetters";
import "../Scss/style.scss";
// Utils
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";

export default function Project(props) {
  const { i, img, title1, title2, url, titleColor } = props;
  const [phoneFormat, setPhoneFormat] = useState(true);

  const projectRef = useRef();
  const imgRef = useRef();
  const imgContainerRef = useRef();

  const { width } = useWindowSize();

  useEffect(() => {
    width < 576 ? setPhoneFormat(true) : setPhoneFormat(false);
  }, [width]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top bottom",
        end: "bottom center",
        id: `.project${i}`,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      imgContainerRef.current,
      {
        scaleX: 0,
      },
      { scaleX: 1, ease: Power1.easeOut, duration: 0.5 }
    );

    tl.fromTo(
      imgRef.current,
      { scale: 5 },
      {
        scale: 1.0,
        ease: Power1.easeOut,
      },
      "<"
    );
  }, []);

  return (
    <div
      ref={projectRef}
      className={`Project ${
        phoneFormat ? "" : "flex"
      } justify-between project${i}`}
    >
      <div className="titleContainer ">
        <h2 className={`projectTitle`}>
          <AnimatedLetters
            title={title1}
            trigger={`.project${i}`}
            startTrigger="70%"
          />
          {title2 && (
            <span>
              <br />
              <AnimatedLetters
                title={title2}
                trigger={`.project${i}`}
                startTrigger="70%"
              />
            </span>
          )}
        </h2>
      </div>
      <a href={url} className="">
        <div ref={imgContainerRef} className="projectPicture">
          <img ref={imgRef} src={img} className={`img-fluid img${i}`}></img>
        </div>
      </a>
    </div>
  );
}
