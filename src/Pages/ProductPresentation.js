import React, { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
// Animation part
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { AnimatePresence, motion } from "framer-motion";
// Data
import projectData from "../data/projectData";

// Variants
const itemAnim = {
  enter: (isNextProject) => {
    return { x: isNextProject ? 1000 : -1000, opacity: 0 };
  },
  exit: (isNextProject) => {
    return { x: isNextProject ? -1000 : 1000, opacity: 0 };
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: { duration: 0.2, ease: "easeOut" },
};

export default function ProductPresentation(props) {
  const [match, params] = useRoute("/project/:id");
  let data = null;
  let next = null;
  let back = null;
  if (match) {
    data = projectData.find((project) => project.id === params.id);
    next = parseInt(data.id) < 2 ? parseInt(data.id) + 1 : 2;
    back = parseInt(data.id) > 0 ? parseInt(data.id) - 1 : 0;
  }

  const [isNextProject, setIsNextProject] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const scrollToTop = () => {
    gsap.to("#ProductPresentation", { duration: 0, scrollTo: "min" });
  };

  return (
    <AnimatePresence>
      {match && (
        <motion.div
          id="ProductPresentation"
          key={`ProductPresentation$`}
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            y: "100%",
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <AnimatePresence exitBeforeEnter custom={isNextProject}>
            <motion.div
              key={`ProductContainer${params.id}`}
              custom={isNextProject}
              variants={itemAnim}
              initial="enter"
              animate="animate"
              exit="exit"
              transition="transition"
            >
              <div className="hero flex-column justify-between">
                <h1>{data.projectTitle}</h1>
                <div className="grid">
                  <p className="bio">{data.projectBio}</p>

                  <div className="infos flex-column justify-end">
                    <p>
                      <a
                        href={`https://${data.projectWebsite}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website :{" "}
                        <span className="underline">
                          {" "}
                          {data.projectWebsite}{" "}
                        </span>
                      </a>
                    </p>
                    <p>Stack : {data.projectStack} </p>
                  </div>
                </div>
              </div>
              <div
                className="image"
                onClick={scrollToTop()}
                style={{
                  backgroundImage: `url(${data.projectHeroImg})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="main">
                {data.mainData.map((mainData, idx) => (
                  <div className="grid" key={idx}>
                    <div className="legende">{mainData.legende}</div>
                    <div className="figure">
                      <img src={mainData.figure} className="img-fluid" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="footer">
                <p className="conclusion">{data.conclusion}</p>
                <div className="line"></div>
                <div className="buttons flex justify-between">
                  {data.id === "0" ? (
                    <div></div>
                  ) : (
                    <Link
                      to={`/project/${back}`}
                      onClick={() => {
                        setIsNextProject(false);
                      }}
                    >
                      <div className="back flex align-center">
                        <div className="smallLine"></div>
                        <p>Back</p>
                      </div>
                    </Link>
                  )}

                  {data.id == projectData.length - 1 ? (
                    <div></div>
                  ) : (
                    <Link
                      to={`/project/${next}`}
                      onClick={() => {
                        setIsNextProject(true);
                        scrollToTop();
                      }}
                    >
                      <div className="next flex align-center">
                        <p>Next project</p>
                        <div className="smallLine"></div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
