import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="https://www.facebook.com/" className="footer__social-link">
            <FaFacebook />
          </a>

          <a href="https://www.facebook.com/" className="footer__social-link">
            <FaGithub />
          </a>
        </div>

        <p className="footer__copyright text-css">ADDRESS</p>
        <p className="footer__copyright text-css">
          Developed by <span>QUYET</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
