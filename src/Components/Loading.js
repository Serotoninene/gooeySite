import React, { useEffect, useRef } from "react";
// Gsap
import gsap, { Linear, Power3 } from "gsap";
// framer-motion
import { motion } from "framer-motion";
// Assets
import logo from "../Assets/Logos/logo.svg";
import loadingTypo from "../Assets/Icons/loadingCircle.svg";

export default function Loading() {
  const typoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      typoRef.current,
      {
        scale: 0.4,
      },
      {
        scale: 1,
        opacity: 1,
        ease: Power3.easeOut,
        delay: 0.3,
        duration: 0.5,
      }
    );
    gsap.to(typoRef.current, {
      rotate: 360,
      duration: 10,
      ease: Linear.easeNone,
      repeat: -1,
    });
  }, []);

  return (
    <div>
      <motion.div
        id="Loading"
        className="flex hidden justify-center align-center fixed"
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key="loadingContainer"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          key="loading"
          className="flex justify-center align-center"
        >
          <div className="logoContainer">
            <img src={logo} alt="alex's logo" className="img-fluid" />
          </div>
          <div ref={typoRef} className="loadingTypo fixed">
            <img src={loadingTypo} alt="Loading" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
