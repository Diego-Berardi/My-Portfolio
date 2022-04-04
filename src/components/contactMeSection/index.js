import React from "react";
import "./index.scss";

//components
import Form from "../form";

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
            Hi I am Diego Berardi, I am currently studying computer engineering
            at Roma Tre university. About a year ago i started studing
            programming, and thanks to the start2impact's course i have acquired
            the fundamental skills to become a Junior Front-End developer.
          </p>
          <br />
          <p>Skills: HTML, CSS, Sass, JavaScript, React js, Git/GitHub.</p>
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
