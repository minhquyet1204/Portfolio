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
    category: "React , Hooks",
    title: "Food order",
    href: "https://diningfood.netlify.app/",
    description:
      "The first project I did after completing the course, this project uses React Hooks : useContext and useReducer",
  },
  {
    id: 2,
    img: Project2,
    category: "React , Redux Toolkit",
    title: "Ecommerce clothes",
    href: "https://dailydiscounts.netlify.app/",
    description:
      "I tried my hand at learning Redux and this is the result, old bottle of new wine",
  },
  {
    id: 3,
    img: Project3,
    category: "React , Framer Motion , Tailwindcss",
    title: "Burger Restaurant",
    description:
      "I love the effect on the website and i try it with Framer Motion",
  },
];
