import React from "react";
import "./contact-me-section.scss";

//components
import Form from "../form/Form";

const AboutMeSection = () => {
  return (
    <section id="contact-me" className="contact-me-section container">
      <div className="about-me-div">
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
        {/* <div className="education-div">
          <div className="timeline-div">
            <div className="highSchool"></div>
            <div className="start2impact"></div>
            <div className="university"></div>
            <div className="year-outside year-22">
              {" "}
              <div className=" year-inside">2022</div>{" "}
            </div>
            <div className="year-outside year-21">
              {" "}
              <div className=" year-inside">2021</div>{" "}
            </div>
          </div>
        </div> */}
      </div>
      <div className="contact-me-div">
        <h2>Contact Me</h2>
        <Form />
      </div>
    </section>
  );
};

export default AboutMeSection;
