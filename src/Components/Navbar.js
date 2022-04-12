import React, { useEffect, useRef } from "react";
// Framer motion
import { AnimatePresence, motion } from "framer-motion";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Wouter
import { Link } from "wouter";
// Asset
import logo from "../Assets/Logos/logo.svg";

export default function Navbar({ loading }) {
  const navRef = useRef();
  const bgRef = useRef();
  const logoRef = useRef();
  const navRef1 = useRef();
  const navRef2 = useRef();
  const navRef3 = useRef();
  const navRef4 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ paused: true });
    loading === false && tl.play();

    const navElements = [
      logoRef.current,
      navRef1.current,
      navRef2.current,
      navRef3.current,
      navRef4.current,
    ];
    tl.to(navElements, {
      y: 0,
      stagger: 0.2,
      ease: Power3.easeOut,
    });

    // return tl.kill();
  }, []);

  return (
    <motion.div
      ref={navRef}
      id="Navbar"
      className="fixed flex justify-between align-center"
    >
      <div ref={logoRef} className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navLinks flex justify-between">
        <Link href="/">
          <div ref={navRef1} className="navLink">
            Lorem Ips
          </div>
        </Link>
        <Link to="/about">
          <div ref={navRef2} className="navLink">
            About
          </div>
        </Link>
        <a
          ref={navRef3}
          href="https://www.linkedin.com/in/alexandre-pujol-333172b3/"
          className="navLink"
        >
          Linkedin
        </a>
        <Link href="#">
          <div ref={navRef4} className="navLink">
            Contact
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
