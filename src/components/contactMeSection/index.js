import React from "react";
import "./index.scss";

//components
import Form from "../form";

//icons
import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";

const AboutMeSection = () => {
  return (
    <section id="contact-me" className="contact-me-section container">
      <div
        className="about-me-div"
        data-aos="fade-right"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <div>
          <h2>About me</h2>
          <p>
            Hi I am Diego Berardi. About a year ago i started studing
            programming, and thanks to the start2impact's course i have acquired
            the fundamental skills to become a{" "}
            <span> Junior Front-End developer.</span>
          </p>
          <br />
          <div className="cube-div">
            <div className="cube">
              <div className="face1">
                <FaReact className="react" />
              </div>
              <div className="face2">
                <IoLogoCss3 className="css" />
              </div>
              <div className="face3">
                <IoLogoJavascript className="javascript" />
              </div>
              <div className="face4">
                <AiOutlineGithub className="" />
              </div>
              <div className="face5">
                <AiFillHtml5 className="html" />
              </div>
              <div className="face6">
                <SiSass className="sass" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-me-div"
        data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <h2>Contact Me</h2>
        <Form />
      </div>
    </section>
  );
};

export default AboutMeSection;
