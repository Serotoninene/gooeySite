import Project from "./Project";
import AnimatedWords from "../Components/AnimatedWords";
// Assets
import tienot from "../Assets/Images/tienot_no_aware-min.png";
import serotoninene from "../Assets/Images/serotoninene-min.png";
import perceptImagery from "../Assets/Images/perceptImagery-min.png";
import salinger from "../Assets/Images/salinger-min.png";
import virgile from "../Assets/Images/virgile-min.png";
import avaa from "../Assets/Images/avaa-architectes.png";
import simon from "../Assets/Images/simonHero.png";

const projects = [
  {
    img: simon,
    title1: "Simon",
    title2: "Eychenne",
    alt: "Homepage of Simon Eychenne's portfolio",
    url: "www.simoneychenne.com/",
  },
  {
    img: avaa,
    title1: "Avaa",
    title2: "Architectes",
    alt: "Homepage of the avaa website",
    url: "www.virgilehasselmann.com/",
  },
  {
    img: virgile,
    title1: "Virgile",
    title2: "Hasselmann",
    alt: "Homepage of the Virgile Hasselmann's website",
    url: "https://virgilehasselmann.com/",
  },
  {
    img: salinger,
    title1: "Salinger",
    title2: "my hero",
    alt: "Homepage of the Salinger-you're-my-hero's website",
    url: "https://salinger-my-hero.vercel.app/",
  },
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
          key={project.url}
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
