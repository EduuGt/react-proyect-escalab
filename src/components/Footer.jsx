import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made by
      <a
        href="https://www.linkedin.com/in/miguel-chamorro-fuentes-844a6514a/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img"></span> <span>Eduardo I. González T.</span>
      </a>
    </div>
    <div className="footer__location">
      CH,
      <span>Talca</span>, 2021
    </div>
  </footer>
);

export default Footer;
