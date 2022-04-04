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
          <div className="incons-div">
            <AiFillHtml5 className="html" /> <IoLogoCss3 className="css" />{" "}
            <IoLogoJavascript className="javascript" />{" "}
            <FaReact className="react" /> <SiSass className="sass" />{" "}
            <AiOutlineGithub className="" />
          </div>
          {/* <p>Skills: HTML, CSS, Sass, JavaScript, React js, Git/GitHub.</p> */}
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
