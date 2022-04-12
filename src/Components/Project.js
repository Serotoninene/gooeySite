import React, { useEffect, useRef } from "react";
// Gsap
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Component
import AnimatedLetters from "./AnimatedLetters";
import "../Scss/style.scss";

export default function Project(props) {
  const projectRef = useRef();
  const imgRef = useRef();
  const imgContainerRef = useRef();
  const { i, img, title, url } = props;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top bottom",
        id: `.project${i}`,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      projectRef.current,
      {
        yPercent: 10,
      },
      {
        opacity: 1,
        scale: 1.2,
        duration: 0.4,
        ease: Power1.easeInOut,
      }
    );

    tl.to(imgContainerRef.current, { borderRadius: 0, ease: Power1.easeOut });

    tl.fromTo(
      imgRef.current,
      { scale: 1.2 },
      {
        scale: 1.0,
        ease: Power1.easeOut,
      },
      "<"
    );
  }, []);
  return (
    <div ref={projectRef} className={`Project flex relative project${i}`}>
      <h2 className="projectTitle absolute">
        <AnimatedLetters
          title={title}
          trigger={`.project${i}`}
          startTrigger="70%"
        />
      </h2>
      <a href={url}>
        <div ref={imgContainerRef} className="projectPicture">
          <img ref={imgRef} src={img} className={`img-fluid img${i}`}></img>
        </div>
      </a>
    </div>
  );
}
