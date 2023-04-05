import React from "react";
import "./skills.css";
import shapeOne from "../../assets/shape-1.png";
import { useWasViewed } from "../../hook/useWasViewd";

const Skills = () => {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-jelly" : "null";

  return (
    <section className={`skills section`} id="skills">
      <h2 className="section__title text-css">Professional Skills</h2>
      <p className="section__subtitle">
        My <span>Skills</span>
      </p>

      <div
        ref={setRef}
        className={`skills__container container grid ${animation}`}
      >
        <div className="skills__logo">
          <i className="devicon-html5-plain colored"></i>
          <span className="tooltiptext">HTML</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-css3-plain colored"></i>
          <span className="tooltiptext">CSS</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-javascript-plain colored"></i>
          <span className="tooltiptext">Javascript</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-react-original colored"></i>
          <span className="tooltiptext">React</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-redux-original colored"></i>
          <span className="tooltiptext">Redux</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-tailwindcss-plain colored"></i>
          <span className="tooltiptext">TailwindCss</span>
        </div>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Skills;
