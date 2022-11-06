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
// Salinger 
import salingerHero from "../Assets/Projects/salinger/salingerHero.png"
import salingerFigure1 from "../Assets/Projects/salinger/salingerFigure1.png"
import salingerFigure2 from "../Assets/Projects/salinger/salingerFigure2.png"
import salingerFigure3 from "../Assets/Projects/salinger/salingerFigure3.png"
import salingerFigure4 from "../Assets/Projects/salinger/salingerFigure4.png"

const projectData = [{
    projectTitle: "Salinger my hero",
    projectBio: "Salinger my hero is the project I need to put to use the quote I write all the time, it was also the opportunity of developping a true backend with typesafety and authentication + a front-end with cool animations and parallaxes.",
    projectHeroImg: salingerHero,
    projectWebsite: "salinger-my-hero.vercel.app",
    projectStack: "NextJs, Framer-motion, Prisma, Trpc, PlanetScale, NextAuth, Figma",
    mainData: [{
        legende: "On the front-end side of this website, I decided to work with framer-motion to handle the animations, parallaxes and page transitions. To this day it's my favourite js animation library as it is made especially for react and offers great performance and possibilities.",
        figure: salingerFigure1,
      },
      {
        legende: "On the about page I really enjoyed playing with scroll triggered animations. Linking the animation directly to the scrollbar, something that I was used to do with gsap but never did with framer-motion. Another thing I had never fully managed to successfully implement was a smooth scroll. The scroll on the website isn't made by the browser but by me and framer-motion.",
        figure: salingerFigure2,
      },
      {
        legende: "The real challenge was on the back-end side, as I wanted the whole website to be dynamic. I've use planetscale as my serverless database and discovered the great tools of prisma and trpc to create typesafe ORM and API. I've also used nextAuth to create a simple and passwordless authentication, using GitHub provider. It also made easy to get back the session object on the client side to use to allow access or not to the admin page for instance to the user.",
        figure: salingerFigure3,
      },
      {
        legende: "The website is totally dynamic and I can add, delete or update the books, the authors, or the quotes. I also used for the first time tailwindcss and was blown away by its simplicity and the major improvement of speed it added to the developent.",
        figure: salingerFigure4,
      },
    ],
    conclusion: "This project was a great challenge as I took care of every part of it, from its design on Figma, to the back-end with nextJs, prisma and trpc; passing through the front-end, with framer-motion and tailwindcss but I'm glad I managed make it work and I'am super pleased of the final product.",
  },
  {
    projectTitle: "Serotoninene",
    projectBio: "Serotoninene is my illustrator alter-ego, I’ve been doing illustrations for few years now and wanted a small e-commerce website. I used this opportunity to learn Threejs, react-three-fiber and custom shaders and how to implement stripe.",
    projectHeroImg: serotonineHero,
    projectWebsite: "serotoninene.alexandrepujol.com",
    projectStack: "ReactJs, Gsap, Threejs, React-Three-Fiber, Scss, Figma",
    mainData: [{
        legende: "While developping this website, I really wanted to start iterate with 3D and ThreeJs, react-three-fiber. The waving flag on the herobanner is made with custom shaders and the illustration page is made with react-three-fiber. The scene for mobile is also totally different than the one on larger screen.",
        figure: serotoFigure1,
      },
      {
        legende: "I also implemented stripe, through the most minimalist back-end I could have, using heroku for the deployment.",
        figure: serotoFigure2,
      },
      {
        legende: "Willing to try somethng new, I also tested wouter instead of react-router-dom. Because it is not constrained by context, wouter’s links will work inside the canvas.",
        figure: serotoFigure3,
      },
    ],
    conclusion: "This project took me longer than I expected, having to make iteration after iteration to find what I really wanted, there is still room for improvement but I find myself quite deeply attached to it. It’s also the first time I could implement 3D in a website and was super impressed by all the possibilities offered by that new technology (thanks Bruno Simon for the amazing course). ",
  },
  {
    projectTitle: "Percept Imagery",
    projectBio: "Percept Imagery is the parent company of another of my clients : Sprie.io, a company that makes augmented reality accessible for e-commerces. I was asked to realise their website. Saddly they have since updated their version. ",
    projectHeroImg: perceptHero,
    projectWebsite: "perceptimagery.alexandrepujol.com",
    projectStack: "ReactJs, Gsap, Scss, Figma",
    mainData: [{
        legende: "My role was both to design and to integrate. The client desire was to make a truly original website so we opted for a site combining horizontal and vertical scroll.",
        figure: perceptFigure1,
      },
      {
        legende: "Gsap was used a LOT on this project, interconnecting mutiple timelines and using the full potential of ScrollTrigger.",
        figure: perceptFigure2,
      },
      {
        legende: "I also wanted to play with page transition and for that I choose to use framer motion, not the most optimum decision as framer motion are fairly similar but framer allow for easy to make and clean looking page transition.",
        figure: perceptFigure3,
      },
    ],
    conclusion: "A very complex and ambitious project to make. Not only the design part was quite different from what I was used to do, it forced me to change my habits in order to please the client but the development part was also extremely intricate. The overlayed animations had to be synched and played correctly. It was a great way to have a deeper understanding of gsap, an incredible tool that I now use in all my projects.",
  },
  {
    projectTitle: "tienot_no_aware",
    projectBio: "My first project after my web dev formation was to create a portfolio for a young photographer from Paris : Etienne Glénat. The website had to stay true to the atmosphere of the photos.",
    projectHeroImg: tienotHero,
    projectWebsite: "tienotnoaware.fr",
    projectStack: "ReactJs, Gsap, Scss, Figma, Framer Motion",
    mainData: [{
        legende: "The website was an occasion to work on my designing skills. To fit with Etienne’s identity, I handled the research, the wireframing and the UI design.",
        figure: tienotFigure1,
      },
      {
        legende: "It was also a great opportunity to work on front-end development: and more specially animations and transitions, it was my first experiments with gsap and framer-motion.",
        figure: tienotFigure2,
      },
      {
        legende: "I also wanted to play with page transitions and for that I choose to use framer motion, not the most optimum decision as framer motion and gsap are fairly similar but framer allow for easy to make and clean looking page transitions.",
        figure: tienotFigure3,
      },
    ],
    conclusion: "Fun and instructive project, I had almost total creative freedom and was able to iterate on the technologies I found most interesting : gsap and framer motion, bringing my designs to life with animations. It was also my first client after my formation and taught me to communicate, always take into account the concerns and desires of the client. I was lucky to get such an interesting and flowing project for my first gig as a freelancer.",
  },
];

projectData.forEach((project, idx) => {
  project.id = idx.toString()
})

export default projectData