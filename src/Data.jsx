import Project1 from "./assets/project1.PNG";
import Project2 from "./assets/project2.PNG";
import Project3 from "./assets/project3.PNG";

export const navs = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: "React , React Router , Sass",
    title: "Movie Web",
    href: "https://cinemaself.netlify.app/",
    description:
      "The website contains information about popular movies, you can add your favorite movies to the collection",
  },
  {
    id: 2,
    img: Project2,
    category: "React , React Router , Redux Toolkit",
    title: "Ecommerce clothes",
    href: "https://dailydiscounts.netlify.app/",
    description: "I tried at learning Redux Toolkit and this is the result",
  },
  {
    id: 3,
    img: Project3,
    category: "React , Framer Motion , Tailwindcss",
    title: "Burger Restaurant",
    href: "https://rescorner.netlify.app/",
    description:
      "I love the effect on the website and i try it with Framer Motion",
  },
];
