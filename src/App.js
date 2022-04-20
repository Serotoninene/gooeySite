import { useEffect, useState } from "react";

// Components
import CanvasContainer from "./Three/ThreeElements/CanvasContainer";
import HPScene from "./Three/ThreeScenes/HPScene";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Loading from "./Components/Loading";
// Styling
import "./Scss/style.scss";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

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
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <motion.div
            exit={{
              opacity: 0,
            }}
            key="loader"
          >
            <Loading loading={loading} setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <CanvasContainer>
              <HPScene data={data} />
            </CanvasContainer>
            <div id="MainContainer">
              <Navbar loading={loading} />
              <Homepage data={data} key="1" path="/" />
              <About data={data} key="2" path="/about" />
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
