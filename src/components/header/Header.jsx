import React, { useEffect, useState } from "react";

import { navs } from "../../Data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, animateScroll } from "react-scroll";

import "./header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showNav);
  }, [showNav]);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 124) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    });
  }, [scrollNav]);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [theme]);

  return (
    <header className={`${scrollNav ? "change-nav" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-css">
          QUYET
        </Link>

        <div className={` ${showNav ? "show__nav" : ""} nav__menu`}>
          <div className="nav__data">
            <ul className="nav__list">
              {navs.map((item, index) => {
                return (
                  <li key={index} className="nav__item">
                    <Link
                      to={item.path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="nav__link text-css"
                      onClick={() => setShowNav(!showNav)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="header__socials">
              <a
                href="https://www.linkedin.com/in/le-minh-quyet-426536268/"
                target="blank"
                className="header__social-link"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/minhquyet1204"
                target="blank"
                className="header__social-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggle" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsSun /> : <BsMoon />}
          </div>

          <div
            className={`nav__toggle ${showNav ? "animate__toggle" : ""}`}
            onClick={() => setShowNav(!showNav)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
