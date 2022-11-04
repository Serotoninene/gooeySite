import React from "react";

// Component
import Project from "./Project";
import AnimatedWords from "../Components/AnimatedWords";
// Assets
import tienot from "../Assets/Images/tienot_no_aware-min.png";
import serotoninene from "../Assets/Images/serotoninene-min.png";
import perceptImagery from "../Assets/Images/perceptImagery-min.png";

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
        img={serotoninene}
        title1="Serotoninene"
        alt="Homepage of the Serotoninene's website"
        url="http://serotoninene.alexandrepujol.com/"
      />

      <Project
        i={1}
        img={perceptImagery}
        title1="Percept"
        title2="Imagery"
        alt="Homepage of the Percept Imagery's website"
        url="http://perceptimagery.alexandrepujol.com/"
      />
      <Project
        i={2}
        img={tienot}
        title1="tienot_no"
        title2="_aware"
        alt="Homepage of the tienotnoaware's website"
        url="http://tienotnoaware.fr/"
      />
    </div>
  );
}
