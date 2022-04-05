import React from "react";
import "./index.scss";

const ProjectComponent = ({
  fadeInAni,
  title,
  textP,
  linkApi,
  technologies,
  linkProject,
  linkGitHub,
  imgProject,
}) => {
  return (
    <article
      className="project "
      data-aos={fadeInAni}
      data-aos-duration="1300"
      data-aos-once="true"
    >
      <h3>{title}</h3>
      <div className="div-info">
        <p>
          {textP}{" "}
          {linkApi ? (
            <a href={linkApi} target="_blank">
              {linkApi}
            </a>
          ) : (
            ""
          )}
        </p>
        <p>{technologies}</p>
        <div className="div-btn">
          <a
            target="_blank"
            href={linkProject}
            className="btn
              btn-basic-white btn-style-red"
          >
            See Website
          </a>
          <a target="_blank" href={linkGitHub} className="btn btn-basic-white">
            See GitHub
          </a>
        </div>
      </div>
      <div className="img-container">
        <a target="_blank" href={linkProject} className="">
          <img src={imgProject} alt="" />
        </a>
      </div>
    </article>
  );
};

export default ProjectComponent;
