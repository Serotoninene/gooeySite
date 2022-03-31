import React, { useEffect } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../Scss/style.scss";

export default function Project(props) {
  const { i, img, title } = props;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.project${i}`,
        start: "top bottom",
        id: `.project${i}`,
        markers: true,
        scrub: 1,
      },
    });

    tl.fromTo(
      `.project${i}`,
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        duration: 0.1,
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className={`Project flex relative project${i}`}>
      <h2 className="projectTitle absolute">{title}</h2>
      <div className="projectPicture">
        <img src={img} className="img-fluid"></img>
      </div>
    </div>
  );
}
