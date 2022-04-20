import React, { useEffect, useState } from "react";

// Component
import Project from "./Project";
import AnimatedWords from "../Components/AnimatedWords";
// Assets
import tienot from "../Assets/Images/tienot_no_aware.png";
import serotoninene from "../Assets/Images/serotoninene.png";
import perceptImagery from "../Assets/Images/perceptImagery.png";

export default function SelectedWorks() {
  return (
    <div id="SelectedWorks">
      <h2 className="mainTitle">
        <AnimatedWords
          text="Selected Works"
          trigger="#SelectedWorks"
          startTrigger="80%"
        />
      </h2>
      <Project
        i={0}
        img={tienot}
        title1="tienot_no"
        title2="_aware"
        url="http://tienotnoaware.fr/"
      />
      <Project
        i={1}
        img={serotoninene}
        title1="Serotoninene"
        url="http://serotoninene.alexandrepujol.com/"
      />

      <Project
        i={2}
        img={perceptImagery}
        title1="Percept"
        title2="Imagery"
        url="http://perceptimagery.alexandrepujol.com/"
      />
    </div>
  );
}
