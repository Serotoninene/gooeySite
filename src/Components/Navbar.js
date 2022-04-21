import React, { useEffect, useRef, useState } from "react";
// Framer motion
import { motion } from "framer-motion";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Wouter
import { Link, useRoute } from "wouter";
// Components
import BurgerMenu from "./BurgerMenu";
// Utils
import useScrollDirection from "../Utilitaries/Hooks/useScrollDirection";
// Asset
import logo from "../Assets/Logos/logo.svg";
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
import NavLink from "./NavLink";

const navLinksArray = [
  {
    title: "Home",
    link: "/",
    href: null,
  },
  {
    title: "About",
    link: "/about",
    href: null,
  },
  {
    title: "Linkedin",
    link: null,
    href: "https://www.linkedin.com/in/alexandre-pujol-333172b3/",
  },
  {
    title: "Github",
    link: null,
    href: "https://github.com/Serotoninene",
  },
];

export default function Navbar({ loading }) {
  const navRef = useRef();
  const logoRef = useRef();
  const navElements = useRef([]);
  const [match, params] = useRoute("/");
  const { width } = useWindowSize();
  const { isDown } = useScrollDirection();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      paused: true,
    });
    loading === false && tl.play();

    tl.to([logoRef.current, navElements.current], {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      ease: Power3.easeOut,
    });

    if (match && width > 625) {
      if (isDown) {
        gsap.to([logoRef.current, navElements.current, navRef.current], {
          y: -100,
          stagger: 0.1,
          ease: Power3.easeOut,
        });
      } else {
        gsap.to([logoRef.current, navRef.current, navElements.current], {
          y: 0,
          stagger: 0.1,
          ease: Power3.easeOut,
        });
      }
    }

    return () => {
      tl.kill();
    };
  }, [isDown, width]);

  return (
    <div ref={navRef} id="Navbar" className="fixed blur">
      <div className="navbarContainer flex justify-between align-center">
        <div ref={logoRef} className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        {/* Burger menu when window's too small */}
        <BurgerMenu navLinksArray={navLinksArray} />
        {/* Classic menu when window's wide enought */}
        <div className="navLinks  flex justify-between">
          {navLinksArray.map((e, idx) => (
            <NavLink
              linkData={e}
              key={idx}
              navElements={navElements}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
