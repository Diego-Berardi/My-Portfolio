import React, { useRef, useEffect } from "react";
import CVImg from "../../assets/img/Diego-Berardi-CV-it.png";
import CVpdf from "../../assets/files/Diego-Berardi-CV-IT.pdf";
import "./home-section.scss";

const HomeSection = () => {
  const titleName_h1 = useRef(null);
  const profile_p = useRef(null);

  useEffect(() => {
    for (let i = 0; i < titleName_h1.current.children.length; i++) {
      titleName_h1.current.children[i].addEventListener("animationend", () =>
        titleName_h1.current.children[i].classList.remove("rubberBand")
      );

      titleName_h1.current.children[i].addEventListener("mouseover", () =>
        titleName_h1.current.children[i].classList.add("rubberBand")
      );
      titleName_h1.current.children[i].addEventListener("click", () =>
        titleName_h1.current.children[i].classList.add("rubberBand")
      );
    }

    for (let i = 0; i < profile_p.current.children.length; i++) {
      profile_p.current.children[i].addEventListener("animationend", () =>
        profile_p.current.children[i].classList.remove("rubberBand")
      );

      profile_p.current.children[i].addEventListener("mouseover", () =>
        profile_p.current.children[i].classList.add("rubberBand")
      );
      profile_p.current.children[i].addEventListener("click", () =>
        profile_p.current.children[i].classList.add("rubberBand")
      );
    }
  });
  return (
    <section id="home" className="home-section container">
      <div className="home-div">
        <div className="bio-div">
          <h1 ref={titleName_h1} className="title-name noselect">
            <span>D</span>
            <span>i</span>
            <span>e</span>
            <span>g</span>
            <span>o</span> <span>B</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>r</span>
            <span>d</span>
            <span>i</span>
          </h1>
          <p ref={profile_p} className="noselect">
            <span>J</span>
            <span>u</span>
            <span>n</span>
            <span>i</span>
            <span>o</span>
            <span>r</span> <span>F</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span> <span>E</span>
            <span>n</span>
            <span>d</span> <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </p>

          <div className="home-btn-div">
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
        <div className="CV-div">
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
