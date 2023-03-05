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

          <p className="home__text">
            I'm Front End Developer based in Viet Nam, and I'm very passionate
            and dedicated to my work.
          </p>

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
