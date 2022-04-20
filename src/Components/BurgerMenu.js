import React, { useEffect, useState, useRef } from "react";
import gsap, { Power3 } from "gsap";
import AnimatedLetters from "./AnimatedLetters";
import { Link } from "wouter";
import useScrollBlock from "../Utilitaries/Hooks/useScrollBlock";

const BurgerAnimation = (props) => {
  const { title, start, hover } = props;
  const lettersRef = useRef([]);

  const addToRefs = (el, idx) => {
    idx === 0 && (lettersRef.current = []);
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current[idx] = el;
    }
  };

  const tl = useRef(
    gsap.timeline({
      paused: true,
      defaults: { ease: Power3.easeOut, duration: 1 },
    })
  );

  useEffect(() => {
    tl.current.to(lettersRef.current, {
      x: 0,
      stagger: 0.02,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    return tl.current.kill();
  }, []);

  useEffect(() => {
    start ? tl.current.play() : tl.current.timeScale(1.5).reverse();
  }, [start]);

  return (
    <>
      {[...title].map((letter, idx) => (
        <span
          key={idx}
          className="hidden"
          style={{
            display: "inline-block",
          }}
        >
          <span
            ref={(e) => addToRefs(e, idx)}
            className="animatedLetter"
            style={{
              display: "inline-block",
              transform: "translate(400%, 0)",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </>
  );
};

export default function BurgerMenu(props) {
  const { navLinksArray } = props;
  const [allowBlock, disableBlock] = useScrollBlock();

  const [open, setOpen] = useState(false);
  const line1Ref = useRef();
  const line2Ref = useRef();
  const panelsRef = useRef([]);

  const tl = useRef(
    gsap.timeline({
      paused: true,
      defaults: { ease: Power3.easeOut, duration: 1 },
    })
  );

  useEffect(() => {
    // Burger transforming
    tl.current.to(line1Ref.current, {
      y: 6,
      duration: 0.2,
    });
    tl.current.to(line2Ref.current, { y: -6, duration: 0.2 }, "<");
    tl.current.to([line1Ref.current, line2Ref.current], {
      scaleX: 0.5,
    });
    tl.current.to(line1Ref.current, { rotate: 225 }, "<");
    tl.current.to(line2Ref.current, { rotate: -225 }, "<");

    // Panels coming in
    tl.current.to(
      panelsRef.current,
      {
        xPercent: -100,
        stagger: 0.1,
      },
      "<"
    );
  }, []);

  useEffect(() => {
    if (open) {
      allowBlock();
      tl.current.play();
    } else {
      tl.current.timeScale(1.5).reverse(0);
      disableBlock();
    }
  }, [open]);

  return (
    <div id="BurgerMenu" className="">
      <div
        className="fixed transitionPanel"
        ref={(e) => {
          panelsRef.current[0] = e;
        }}
      ></div>
      <div
        className="fixed menu flex justify-center align-center"
        ref={(e) => {
          panelsRef.current[1] = e;
        }}
      >
        <div className="menuContainer flex-column justify-between align center">
          {navLinksArray.map((e, idx) => (
            <h2 key={idx}>
              {!e.href ? (
                <Link
                  href={e.link}
                  key={idx}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <div className="navLink">
                    <BurgerAnimation title={e.title} start={open} />
                  </div>
                </Link>
              ) : (
                <a key={idx} href={e.href} className="navLink">
                  <BurgerAnimation title={e.title} start={open} />
                </a>
              )}
            </h2>
          ))}
        </div>
      </div>
      <div
        className="burgerBtn"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div ref={line1Ref} className="line"></div>
        <div ref={line2Ref} className="line"></div>
      </div>
    </div>
  );
}
