import React from "react";
import "./header.scss";
import { BiGridAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <a href="#home">
          <p className="">Diego Berardi</p>
        </a>
      </div>
      <nav className="nav-bar">
        <BiGridAlt className="mobile-menu-btn" />
        <ul className="desktop-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
