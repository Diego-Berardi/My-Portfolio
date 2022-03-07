import React from "react";
import "./mobile-menu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <nav >
        <ul>
          <li>
            <a href="">Home</a>
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
    </div>
  );
};

export default MobileMenu;
