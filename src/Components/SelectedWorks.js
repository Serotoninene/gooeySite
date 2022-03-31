import React from "react";
// Component
import Project from "./Project";
// Assets
import eliott from "../Assets/Images/eliott.jpg";
import fenetre from "../Assets/Images/fenetre.jpg";

export default function SelectedWorks() {
  return (
    <div id="SelectedWorks">
      <h1> Selected Works </h1>
      <Project i={0} img={eliott} title="tienot_no_aware" />
      <Project i={1} img={eliott} title="tienot_no_aware" />
      <Project i={2} img={eliott} title="tienot_no_aware" />
    </div>
  );
}
