import React from "react";

import { FaArrowRight } from "react-icons/fa";

import shapeTwo from "../../assets/shape-2.png";

const Item = ({ project }) => {
  return (
    <>
      <div className="portfolio__items card-two card ">
        <div className="portfolio__img-wrapper">
          <img src={project.img} className="portfolio__img" alt="" />
        </div>

        <span className="portfolio__category text-css">{project.category}</span>
        <h3 className="portfolio__title">{project.title}</h3>
        <p className="portfolio__description">{project.description}</p>

        <a href={project.href} className="link" target="blank">
          Demo
          <FaArrowRight className="link__icon" />
        </a>

        <img src={shapeTwo} alt="" className="shape c__shape" />
      </div>
    </>
  );
};

export default Item;
