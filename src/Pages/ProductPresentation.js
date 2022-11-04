import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

import { AnimatePresence, motion } from "framer-motion";
// Assets
// Serotoninne
import serotonineHero from "../Assets/Projects/serotoninene/HeroImg.png";
import serotoFigure1 from "../Assets/Projects/serotoninene/Illustrations.png";
import serotoFigure2 from "../Assets/Projects/serotoninene/Illustration.png";
import serotoFigure3 from "../Assets/Projects/serotoninene/Menu.png";
// Tienot
import tienotHero from "../Assets/Projects/tienot/HeroImg.png";
import tienotFigure1 from "../Assets/Projects/tienot/Mono.png";
import tienotFigure2 from "../Assets/Projects/tienot/Gallery.png";
import tienotFigure3 from "../Assets/Projects/tienot/Lucie.png";
// Percept Imagery
import perceptHero from "../Assets/Projects/Percept/HeroImg.png";
import perceptFigure1 from "../Assets/Projects/Percept/sprie.png";
import perceptFigure2 from "../Assets/Projects/Percept/we_are.png";
import perceptFigure3 from "../Assets/Projects/Percept/exploring.png";

// Variants
const itemAnim = {
  enter: (isNextProject) => {
    return { x: isNextProject ? -1000 : 1000, opacity: 0 };
  },
  exit: (isNextProject) => {
    return { x: isNextProject ? 1000 : -1000, opacity: 0 };
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

                  {data.id === "2" ? (
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

const projectData = [
  {
    id: "0",
    projectTitle: "tienot_no_aware",
    projectBio:
      "My first project after my web dev formation was to create a portfolio for a young photographer from Paris : Etienne Glénat. The website had to stay true to the atmosphere of the photos.",
    projectHeroImg: tienotHero,
    projectWebsite: "tienotnoaware.fr",
    projectStack: "ReactJs, Gsap, Scss, Figma, Framer Motion",
    mainData: [
      {
        legende:
          "The website was an occasion to work on my designing skills. To fit with Etienne’s identity, I handled the research, the wireframing and the UI design.",
        figure: tienotFigure1,
      },
      {
        legende:
          "It was also a great opportunity to work on front-end development: and more specially animations and transitions, it was my first experiments with gsap and framer-motion.",
        figure: tienotFigure2,
      },
      {
        legende:
          "I also wanted to play with page transitions and for that I choose to use framer motion, not the most optimum decision as framer motion and gsap are fairly similar but framer allow for easy to make and clean looking page transitions.",
        figure: tienotFigure3,
      },
    ],
    conclusion:
      "Fun and instructive project, I had almost total creative freedom and was able to iterate on the technologies I found most interesting : gsap and framer motion, bringing my designs to life with animations. It was also my first client after my formation and taught me to communicate, always take into account the concerns and desires of the client. I was lucky to get such an interesting and flowing project for my first gig as a freelancer.",
  },
  {
    id: "1",
    projectTitle: "Serotoninene",
    projectBio:
      "Serotoninene is my illustrator alter-ego, I’ve been doing illustrations for few years now and wanted a small e-commerce website. I used this opportunity to learn Threejs, react-three-fiber and custom shaders and how to implement stripe.",
    projectHeroImg: serotonineHero,
    projectWebsite: "serotoninene.alexandrepujol.com",
    projectStack: "ReactJs, Gsap, Threejs, React-Three-Fiber, Scss, Figma",
    mainData: [
      {
        legende:
          "While developping this website, I really wanted to start iterate with 3D and ThreeJs, react-three-fiber. The waving flag on the herobanner is made with custom shaders and the illustration page is made with react-three-fiber. The scene for mobile is also totally different than the one on larger screen.",
        figure: serotoFigure1,
      },
      {
        legende:
          "I also implemented stripe, through the most minimalist back-end I could have, using heroku for the deployment.",
        figure: serotoFigure2,
      },
      {
        legende:
          "Willing to try somethng new, I also tested wouter instead of react-router-dom. Because it is not constrained by context, wouter’s links will work inside the canvas.",
        figure: serotoFigure3,
      },
    ],
    conclusion:
      "This project took me longer than I expected, having to make iteration after iteration to find what I really wanted, there is still room for improvement but I find myself quite deeply attached to it. It’s also the first time I could implement 3D in a website and was super impressed by all the possibilities offered by that new technology (thanks Bruno Simon for the amazing course). ",
  },
  {
    id: "2",
    projectTitle: "Percept Imagery",
    projectBio:
      "Percept Imagery is the parent company of another of my clients : Sprie.io, a company that makes augmented reality accessible for e-commerces. I was asked to realise their website. Saddly they have since updated their version. ",
    projectHeroImg: perceptHero,
    projectWebsite: "perceptimagery.alexandrepujol.com",
    projectStack: "ReactJs, Gsap, Scss, Figma",
    mainData: [
      {
        legende:
          "My role was both to design and to integrate. The client desire was to make a truly original website so we opted for a site combining horizontal and vertical scroll.",
        figure: perceptFigure1,
      },
      {
        legende:
          "Gsap was used a LOT on this project, interconnecting mutiple timelines and using the full potential of ScrollTrigger.",
        figure: perceptFigure2,
      },
      {
        legende:
          "I also wanted to play with page transition and for that I choose to use framer motion, not the most optimum decision as framer motion are fairly similar but framer allow for easy to make and clean looking page transition.",
        figure: perceptFigure3,
      },
    ],
    conclusion:
      "A very complex and ambitious project to make. Not only the design part was quite different from what I was used to do, it forced me to change my habits in order to please the client but the development part was also extremely intricate. The overlayed animations had to be synched and played correctly. It was a great way to have a deeper understanding of gsap, an incredible tool that I now use in all my projects.",
  },
];
