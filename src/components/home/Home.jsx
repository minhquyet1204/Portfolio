import React from "react";
import "./home.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-css">
            Hello , <span>My name is</span>
          </p>

          <h1 className="home__title text-css">
            <span>LE MINH </span>QUYET
          </h1>

          <p className="home__job">
            <span className="text-css">I Am</span> <b>Front End Developer</b>
          </p>

          <div className="home__about">
            <h4 className="home__about-title">
              Welcome to my personal website!
            </h4>
            <p className="home__about-text">
              I started my in-depth front-end programming journey in summer 2022
              and always kept upgrading my skills. I have experience with
              ReactJS .I'm also can use Redux , TailwindCSS and now i'm learning
              Typescript.
            </p>
          </div>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/le-minh-quyet-426536268/"
              target="blank"
              className="home__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/minhquyet1204"
              target="blank"
              className="home__social-link"
            >
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a href="/" className="btn text-css">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
