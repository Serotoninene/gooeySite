import React from "react";
// Assets
import eliott from "../Assets/Images/eliott.jpg";
import fenetre from "../Assets/Images/fenetre.jpg";

export default function SelectedWorks() {
  return (
    <div id="SelectedWorks">
      <h1> Selected Works </h1>

      <div className="gridContainer">
        <div className="project1">
          <img src={eliott} className="img-fluid" alt="testPhoto" />
        </div>
        <div className="project2">
          <img src={fenetre} className="img-fluid" alt="testPhoto" />
        </div>
      </div>
    </div>
  );
}
