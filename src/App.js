import { useEffect, useRef, useState, Suspense } from "react";
// Gsap
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";

// Components
import CanvasContainer from "./Three/ThreeElements/CanvasContainer";
import HPScene from "./Three/ThreeScenes/HPScene";
import Herobanner from "./Components/Herobanner";
import Presentation from "./Components/Presentation";
import Skills from "./Components/Skills";
// Styling
import "./Scss/style.scss";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [loading, setLoading] = useState(false);
  const heroTextRef = useRef();
  const presentationTextRef = useRef();

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
            <HPScene />
          </CanvasContainer>
          {/* <div id="MainContainer">
            <Herobanner />
            <Presentation />
            <Skills />
          </div> */}
        </>
      )}
    </>
  );
}

export default App;
