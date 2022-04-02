import React, { useEffect, useState } from "react";
import CVImg from "../../assets/img/Diego-Berardi-CV-it.png";
import CVpdf from "../../assets/files/Diego-Berardi-CV-IT.pdf";
import "./index.scss";
import "../../assets/scss/index.scss";
//compontents
import AnimatedLetter from "../animatedLetter";

const HomeSection = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setInterval(() => {
      setLetterClass(" ");

      setLetterClass("rubberBand2 ");
    }, 15000);
  }, []);
  return (
    <section id="home" className="home-section container">
      <div className="home-div">
        <div className="bio-div">
          <h1 className="title-name noselect">
            <AnimatedLetter
              letterClass={letterClass}
              setLetterClass={setLetterClass}
              arrLetters={["D", "i", "e", "g", "o"]}
              index={1}
            />{" "}
            <AnimatedLetter
              letterClass={letterClass}
              setLetterClass={setLetterClass}
              arrLetters={["B", "e", "r", "a", "r", "d", "i"]}
              index={6}
            />
          </h1>

          <p className="noselect">
            <AnimatedLetter
              letterClass={letterClass}
              setLetterClass={setLetterClass}
              arrLetters={["J", "u", "n", "i", "o", "r"]}
              index={13}
            />{" "}
            <AnimatedLetter
              letterClass={letterClass}
              setLetterClass={setLetterClass}
              arrLetters={["F", "r", "o", "n", "t"]}
              index={19}
            />{" "}
            <AnimatedLetter
              letterClass={letterClass}
              setLetterClass={setLetterClass}
              arrLetters={["E", "n", "d"]}
              index={24}
            />{" "}
            <br className="br_1" />
            <AnimatedLetter
              letterClass={letterClass}
              setLetterClass={setLetterClass}
              arrLetters={["D", "e", "v", "e", "l", "o", "p", "e", "r"]}
              index={27}
            />
          </p>

          <div className="home-btn-div fadeinLeft-class">
            <a
              href="#contact-me"
              className="btn btn-style-red  btn-basic-white "
            >
              Contact Me!
            </a>
            <a href="#work" className="btn btn-basic-white ">
              See My Work!
            </a>
          </div>
        </div>
        <div className="CV-div fadeinRight-class">
          <div className="CV-container">
            <img src={CVImg} alt="" />
          </div>
          <a
            href={CVpdf}
            target="_blank"
            className="btn btn-basic-white btn-style-red   "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
