import React from "react";
import "./index.scss";

import { useGlobalContext } from "../../context";

// react iconst
import { BiGridAlt } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  const { showMobileMenu, setShowMobileMenu } = useGlobalContext();

  return (
    <header
      className="header container noselect "
      data-aos="fade-down"
      data-aos-duration="1300"
      data-aos-delay="3000"
    >
      <div className="logo">
        <a href="#home">
          <p className="link">DB</p>
        </a>
      </div>
      <nav className="nav-bar">
        <BiGridAlt
          className="mobile-menu-btn"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <ul className="desktop-nav">
          <li>
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="link" href="#contact-me">
              Contact Me
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-berardi/"
              target="_blank"
            >
              <BsLinkedin className="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Diego-Berardi" target="_blank">
              <BsGithub className="github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
