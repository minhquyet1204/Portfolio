import "./portfolio.css";
import Item from "./Item";
import shapeOne from "../../assets/shape-1.png";

import { projects } from "../../Data";
import { useWasViewed } from "../../hook/useWasViewd";
const Portfolio = () => {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-fade-in-down " : "null";

  return (
    <section className={`section portfolio `} id="portfolio">
      <h2 className="section__title text-css">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Projects</span>
      </p>

      <div
        ref={setRef}
        className={`portfolio__container container grid ${animation}`}
      >
        {projects.map((project) => (
          <Item key={project.id} project={project} />
        ))}
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Portfolio;
