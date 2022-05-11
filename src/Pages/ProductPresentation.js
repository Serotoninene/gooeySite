import React from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function ProductPresentation(props) {
  const [location, setLocation] = useLocation();
  return (
    <>
      {location === props.path && (
        <div id="ProductPresentation" key={props.path}>
          <h3>Product Presentation</h3>
        </div>
      )}
    </>
  );
}
