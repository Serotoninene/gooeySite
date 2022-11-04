import { useEffect, useState } from "react";
// Components
import CanvasContainer from "./Three/ThreeElements/CanvasContainer";
import HPScene from "./Three/ThreeScenes/HPScene";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Loading from "./Components/Loading";
import ProductPresentation from "./Pages/ProductPresentation";
import Blog from "./Pages/Blog";
// framer-motion
import { AnimatePresence } from "framer-motion";
// Utils
import useFontFaceObserver from "use-font-face-observer";
// Styling
import "./Scss/style.scss";

function App() {
  const [loading, setLoading] = useState(false);
  const isFontListLoaded = useFontFaceObserver([
    { family: `MonumentExtended` },
  ]);

  // Data for the debugUi mothafucka
  const [data, setData] = useState({
    uColor1: "#3D6488",
    uColor2: "#3D6488",
    uColor3: "#CECEEB",
    uDistortionIntensity: 0.8,
    uDistortionSpeed: 0.1,
    uDistortionFrequency: 0.1,
  });

  useEffect(() => {
    !isFontListLoaded && setLoading(false);
  });

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <Loading key="loading" />
      ) : (
        <>
          <CanvasContainer key="canvasContainer">
            <HPScene data={data} />
          </CanvasContainer>
          <div id="MainContainer">
            <Navbar />
            <Homepage data={data} key="1" path="/" />
            <About data={data} key="2" path="/about" />
            <ProductPresentation key="3" path="/project/:id" />
            <Blog data={data} key="4" path="/blog" />
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
