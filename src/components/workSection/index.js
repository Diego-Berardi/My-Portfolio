import React from "react";
import "./index.scss";

// imgs
import netflixImg from "../../assets/img/netflix2.png";
import theNewYorkTimesImg from "../../assets/img/theNewYorkTimes.png";
import hackerNewsImg from "../../assets/img/hackerNews.png";
import calculatorImg from "../../assets/img/calculator.png";
import ticTacToeImg from "../../assets/img/TicTacToe.png";

const WorkSection = () => {
  return (
    <section id="work" className="work-section container">
      <h2
        className="title"
        data-aos="fade-down"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        My Projects
      </h2>
      <article
        className="project "
        data-aos="fade-right"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <h3>Netflix Clone</h3>
        <div className="div-info">
          <p>
            This is the final projects for Start2Impact, is a website that look
            like Netflix where you can search Movies, Tv Shows see the info, the
            cast and save it in your list. <br /> The project is developed with
            The Movie Database's api:{" "}
            <a href="https://www.themoviedb.org/" target="_blank">
              https://www.themoviedb.org/
            </a>
          </p>
          <p>- React js</p>
          <div className="div-btn">
            <a
              target="_blank"
              href="https://netflix-clone-database.netlify.app/"
              className="btn
              btn-basic-white btn-style-red"
            >
              See Website
            </a>
            <a
              target="_blank"
              href="https://github.com/Diego-Berardi/Netflix-clone"
              className="btn btn-basic-white"
            >
              See GitHub
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={netflixImg} alt="" />
        </div>
      </article>
      <article
        className="project "
        data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <h3>The New York Times Clone Clone</h3>
        <div className="div-info">
          <p>
            This is the React project for Start2Ipact, this website is a clone
            of the New York Times. I developed the project with the NYT's api:{" "}
            <a href="https://developer.nytimes.com/get-started" target="_blank">
              https://developer.nytimes.com/get-started
            </a>
          </p>
          <p>- React js</p>

          <div className="div-btn">
            <a
              target="_blank"
              href="https://new-york-times-clone.netlify.app/"
              className="btn
              btn-basic-white btn-style-red"
            >
              See Website
            </a>
            <a
              target="_blank"
              href="https://github.com/Diego-Berardi/NYT-clone-Start2Impact"
              className="btn btn-basic-white"
            >
              See GitHub
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={theNewYorkTimesImg} alt="" />
        </div>
      </article>
      <article
        className="project "
        data-aos="fade-right"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <h3>Hacker News</h3>
        <div className="div-info">
          <p>
            This is the JavaScript Advance project for Start2Ipact, this website
            show the last tech related news. I take the news from this api:{" "}
            <a href="https://github.com/HackerNews/API" target="_blank">
              https://github.com/HackerNews/API
            </a>
          </p>
          <p>- HTML, CSS, JavaScript</p>

          <div className="div-btn">
            <a
              target="_blank"
              href="https://hacker-news-start2impact.netlify.app/"
              className="btn
              btn-basic-white btn-style-red"
            >
              See Website
            </a>
            <a
              target="_blank"
              href="https://github.com/Diego-Berardi/hacker-news-Start2Impact"
              className="btn btn-basic-white"
            >
              See GitHub
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={hackerNewsImg} alt="" />
        </div>
      </article>
      <article
        className="project "
        data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <h3>Calculator JavaScript</h3>
        <div className="div-info">
          <p>Simple calculator built with HTML, CSS and JavaScript</p>
          <p>- HTML, CSS, JavaScript</p>

          <div className="div-btn">
            <a
              target="_blank"
              href="https://diego-berardi.github.io/Simple-Calculator/"
              className="btn
              btn-basic-white btn-style-red"
            >
              See Website
            </a>
            <a
              target="_blank"
              href="https://github.com/Diego-Berardi/Simple-Calculator"
              className="btn btn-basic-white"
            >
              See GitHub
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={calculatorImg} alt="" />
        </div>
      </article>
      <article
        className="project "
        data-aos="fade-right"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <h3>Tic Tac Toe Game VS A.I.</h3>
        <div className="div-info">
          <p>
            Basic Tic Tac Toe game. You can choose to play in 2 players or alone
            vs the unbeateble AI
          </p>
          <p>- HTML, CSS, JavaScript</p>

          <div className="div-btn">
            <a
              target="_blank"
              href="https://diego-berardi.github.io/Tic-Tac-Toe/"
              className="btn
              btn-basic-white btn-style-red"
            >
              See Website
            </a>
            <a
              target="_blank"
              href="https://github.com/Diego-Berardi/Tic-Tac-Toe"
              className="btn btn-basic-white"
            >
              See GitHub
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={ticTacToeImg} alt="" />
        </div>
      </article>
    </section>
  );
};

export default WorkSection;
