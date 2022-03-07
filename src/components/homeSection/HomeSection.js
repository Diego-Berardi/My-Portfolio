import React from "react";
import CVImg from "../../assets/img/prova.png";
import "./home-section.scss";

const HomeSection = () => {
  return (
    <section id="home" className="home-section container">
      <div className="home-div">
        <div className="bio-div">
          <h1 class="title">Diego Berardi</h1>
          <p>Junior Front End Developer</p>
          <div className="home-btn-div">
            <button className="home-btn-red  home-btn btn">Contact Me!</button>
            <button className="home-btn btn">See My Work!</button>
          </div>
        </div>
        <div className="CV-div">
          <div className="CV-container">
            <img src={CVImg} alt="" srcset="" />
          </div>
          <button className="home-btn home-btn-red   btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
