import { useEffect, useRef, useState } from "react";
// Components
import CanvasContainer from "./Three/ThreeElements/CanvasContainer";
import HPScene from "./Three/ThreeScenes/HPScene";
import Herobanner from "./Components/Herobanner";
import Presentation from "./Components/Presentation";
import SelectedWorks from "./Components/SelectedWorks";
// Styling
import "./Scss/style.scss";
import DatUi from "./Components/DatUi";

function App() {
  const [loading, setLoading] = useState(false);
  const heroTextRef = useRef();
  const presentationTextRef = useRef();

  // Data for the debugUi mothafucka
  const [data, setData] = useState({
    uColor1: "#1f4152",
    uColor2: "#864343",
    uColor3: "#69a851",
    uDistortionIntensity: 0.8,
    uDistortionSpeed: 0.1,
    uDistortionFrequency: 0.1,
  });

  useEffect(() => {
    // Loading
    // setInterval(() => {
    //   setLoading(false);
    // }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <h1> Loading </h1>
      ) : (
        <>
          <CanvasContainer>
            <HPScene data={data} />
          </CanvasContainer>
          <div id="MainContainer">
            <Herobanner />
            <Presentation />
            <SelectedWorks />
          </div>
          <DatUi data={data} setData={setData} />
        </>
      )}
    </>
  );
}

export default App;
