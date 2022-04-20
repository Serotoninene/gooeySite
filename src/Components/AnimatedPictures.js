import React, { useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";

export default function AnimatedPictures(props) {
  const { pic, order, round } = props;
  const imgRef = useRef();
  const imgContainerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: Power3.easeOut },
      delay: 0.7,
    });

    tl.fromTo(
      imgRef.current,
      { scale: 3.2 },
      { scale: 1, delay: order * 0.1, duration: 1 }
    );

    tl.fromTo(
      imgContainerRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        stagger: 0.1,
      },
      "<"
    );
  }, []);
  return (
    <div ref={imgContainerRef} className={`picture ${round ? "round" : ""}`}>
      <img ref={imgRef} src={pic} className="img-fluid" />
    </div>
  );
}
