import React from "react";
import "./index.scss";

import { useGlobalContext } from "../../context";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const MobileMenu = () => {
  const { showMobileMenu, setShowMobileMenu } = useGlobalContext();

  const toggleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
      <nav>
        <ul>
          <li>
            <a className="link" onClick={toggleShowMobileMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="link" onClick={toggleShowMobileMenu} href="#work">
              Work
            </a>
          </li>
          <li>
            <a
              className="link"
              onClick={toggleShowMobileMenu}
              href="#contact-me"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="social">
          <a href="https://www.linkedin.com/in/diego-berardi/" target="_blank">
            <BsLinkedin className="linkedin" />
          </a>
          <a href="https://github.com/Diego-Berardi" target="_blank">
            <BsGithub className="github" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
