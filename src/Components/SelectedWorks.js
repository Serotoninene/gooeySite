import React, { useEffect, useState } from "react";

// Component
import Project from "./Project";
import AnimatedLetters from "./AnimatedLetters";
// Assets
import eliott from "../Assets/Images/eliott.jpg";
import fenetre from "../Assets/Images/fenetre.jpg";
import tienot from "../Assets/Images/tienot_no_aware.png";
import serotoninene from "../Assets/Images/serotoninene.png";
import perceptImagery from "../Assets/Images/perceptImagery.png";

export default function SelectedWorks() {
  return (
    <div id="SelectedWorks">
      <h2>
        <AnimatedLetters
          title={"Selected"}
          trigger={"#SelectedWorks"}
          startTrigger="70%"
        />{" "}
        <AnimatedLetters
          title={"Work"}
          trigger={"#SelectedWorks"}
          startTrigger="70%"
        />
      </h2>
      <Project
        i={0}
        img={tienot}
        title="tienot_no_aware"
        url="http://tienotnoaware.fr/"
      />

      <Project
        i={1}
        img={serotoninene}
        title="Serotoninene"
        url="http://serotoninene.alexandrepujol.com/"
        colors={{
          color1: "test",
        }}
      />
      <Project
        i={2}
        img={perceptImagery}
        title="Percept Imagery"
        url="http://perceptimagery.alexandrepujol.com/"
      />
    </div>
  );
}
