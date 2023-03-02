import "./portfolio.css";
import Item from "./Item";

import { projects } from "../../Data";

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title text-css">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Projects</span>
      </p>

      <div className="portfolio__container container grid">
        {projects.map((project) => (
          <Item key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
