import React from "react";
// Wouter
import { useLocation, useRoute } from "wouter";
// Framer motion
import { AnimatePresence, motion } from "framer-motion";
// Components
import Herobanner from "../Components/Herobanner";
import Presentation from "../Components/Presentation";
import SelectedWorks from "../Components/SelectedWorks";
import Contact from "../Pages/Contact";
import ScrollIndicator from "../Components/ScrollIndicator";

export default function Homepage(props) {
  const { data } = props;
  const [match, params] = useRoute("/");
  const [location, setLocation] = useLocation();

  return (
    <AnimatePresence>
      {location === props.path && (
        <motion.div
          id="Homepage"
          key="Homepage"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <ScrollIndicator />
          <Herobanner />
          <Presentation />
          <SelectedWorks />
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
