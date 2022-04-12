import React from "react";
// Wouter
import { Link, useLocation, useRouter, useRoute } from "wouter";
// Framer motion
import { AnimatePresence, motion } from "framer-motion";
// Components
import CanvasContainer from "../Three/ThreeElements/CanvasContainer";
import HPScene from "../Three/ThreeScenes/HPScene";
import Herobanner from "../Components/Herobanner";
import Presentation from "../Components/Presentation";
import SelectedWorks from "../Components/SelectedWorks";
import { Html } from "@react-three/drei";

export default function Homepage(props) {
  const { data } = props;
  const [match, params] = useRoute("/");
  const [location, setLocation] = useLocation();

  return (
    <AnimatePresence>
      {location === props.path && (
        <motion.div
          id="Homepage"
          key="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <div>
            <Herobanner />
            <Presentation />
            <SelectedWorks />
          </div>

          {/* <DatUi data={data} setData={setData} /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
