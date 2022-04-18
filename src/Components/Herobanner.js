import { useEffect, useContext, useRef, useState, Suspense } from "react";
// Utilitaries
import AnimatedWords from "./AnimatedWords";

export default function () {
  return (
    <div id="Herobanner" className="flex justify-center align-center relative">
      <h1>
        <AnimatedWords text="Lorem, Maxi Ipsum lorem" delay={1} />
      </h1>
    </div>
  );
}
