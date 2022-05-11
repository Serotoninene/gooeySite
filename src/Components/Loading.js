import React from "react";
// framer-motion
import { motion } from "framer-motion";
// Assets
import logo from "../Assets/Logos/logo.svg";

export default function Loading() {
  return (
    <motion.div
      id="Loading"
      className="flex hidden justify-center align-center fixed"
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      key="loadingContainer"
    >
      <div className="flex justify-center align-center">
        <div className="logoContainer animateFlicker">
          <img src={logo} alt="alex's logo" className="img-fluid" />
        </div>
      </div>
    </motion.div>
  );
}
