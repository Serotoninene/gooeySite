import React, { useContext } from "react";
import DatGui, { DatColor, DatFolder, DatNumber } from "react-dat-gui";

export default function DatUi(props) {
  const { data, setData } = props;
  return (
    <DatGui data={data} onUpdate={setData}>
      <DatFolder title="colors b">
        <DatColor path="uColor1" label="uColor1" />
        <DatColor path="uColor2" label="uColor2" />
        <DatColor path="uColor3" label="uColor3" />
      </DatFolder>
      <DatFolder title="sphere metrics">
        <DatNumber
          path="uDistortionIntensity"
          min={0.1}
          max={10}
          step={0.1}
        ></DatNumber>
        <DatNumber
          path="uDistortionFrequency"
          min={0.1}
          max={1}
          step={0.01}
        ></DatNumber>
        <DatNumber
          path="uDistortionSpeed"
          min={0.1}
          max={2}
          step={0.1}
        ></DatNumber>
      </DatFolder>
    </DatGui>
  );
}
