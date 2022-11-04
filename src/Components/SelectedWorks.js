import React from "react";

// Component
import Project from "./Project";
import AnimatedWords from "../Components/AnimatedWords";
// Assets
import tienot from "../Assets/Images/tienot_no_aware-min.png";
import serotoninene from "../Assets/Images/serotoninene-min.png";
import perceptImagery from "../Assets/Images/perceptImagery-min.png";

const projects = [
  {
    img: serotoninene,
    title1: "Serotoninene",
    alt: "Homepage of the Serotoninene's website",
    url: "http://serotoninene.alexandrepujol.com/",
  },
  {
    img: perceptImagery,
    title1: "Percept",
    title2: "Imagery",
    alt: "Homepage of the Percept Imagery's website",
    url: "http://perceptimagery.alexandrepujol.com/",
  },
  {
    img: tienot,
    title1: "tienot_no",
    title2: "_aware",
    alt: "Homepage of the tienotnoaware's website",
    url: "http://tienotnoaware.fr/",
  },
];

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

      {projects.map((project, idx) => (
        <Project
          i={idx}
          img={project.img}
          title1={project.title1}
          title2={project.title2 && project.title2}
          alt={project.alt}
          url={project.url}
        />
      ))}
    </div>
  );
}
