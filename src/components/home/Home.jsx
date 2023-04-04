import React from "react";
import "./home.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [subText] = useTypewriter({
    words: ["I am Front end Developer"],
    loop: 0,
  });
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
            <span className="text-css"></span> <b>{subText}</b>
            <Cursor />
          </p>

          <div className="home__about">
            <h4 className="home__about-title">
              Welcome to my personal website!
            </h4>
            <p className="home__about-text">
              I started my in-depth front-end programming journey in summer 2022
              and always kept upgrading my skills. I have experience with
              ReactJS and i'm also can use Redux , TailwindCSS.
            </p>
          </div>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/le-minh-quyet-426536268/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/minhquyet1204"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a href="LeMinhQuyet_ReactJs.pdf" className="btn text-css">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
