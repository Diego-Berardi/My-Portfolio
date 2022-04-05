import React from "react";
import "./index.scss";

// imgs
import netflixImg from "../../assets/img/netflix2.png";
import theNewYorkTimesImg from "../../assets/img/theNewYorkTimes.png";
import hackerNewsImg from "../../assets/img/hackerNews.png";
import calculatorImg from "../../assets/img/calculator.png";
import ticTacToeImg from "../../assets/img/TicTacToe.png";

//components
import ProjectComponent from "../projectComponent";

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
      <ProjectComponent
        fadeInAni={"fade-right"}
        title={"Netflix Clone"}
        textP={`Final projects for Start2Impact, is a website that look
            like Netflix where you can search Movies, Tv Shows see the info, the
            cast and save it in your list. The project is developed with
            The Movie Database's api: `}
        linkApi={"https://www.themoviedb.org/"}
        technologies={"- React js"}
        linkProject={"https://netflix-clone-database.netlify.app/"}
        linkGitHub={"https://github.com/Diego-Berardi/Netflix-clone"}
        imgProject={netflixImg}
      />
      <ProjectComponent
        fadeInAni={"fade-left"}
        title={"The New York Times Clone Clone"}
        textP={`React project for Start2Ipact, this website is a clone
            of the New York Times. The project is developed with the NYT's api:`}
        linkApi={"https://new-york-times-clone.netlify.app/"}
        technologies={"- React js"}
        linkProject={"https://new-york-times-clone.netlify.app/"}
        linkGitHub={"https://github.com/Diego-Berardi/NYT-clone-Start2Impact"}
        imgProject={theNewYorkTimesImg}
      />

      <ProjectComponent
        fadeInAni={"fade-right"}
        title={"Hacker News"}
        textP={`JavaScript Advance project for Start2Ipact, this website
            show the last tech related news. The project is developed with the HackerNews's api: `}
        linkApi={"https://github.com/HackerNews/API"}
        technologies={"- HTML CSS JavaScript"}
        linkProject={"https://hacker-news-start2impact.netlify.app/"}
        linkGitHub={"https://github.com/Diego-Berardi/hacker-news-Start2Impact"}
        imgProject={hackerNewsImg}
      />
      <ProjectComponent
        fadeInAni={"fade-left"}
        title={"Calculator JavaScript"}
        textP={`Simple calculator built with HTML, CSS and JavaScript `}
        technologies={"- HTML CSS JavaScript"}
        linkProject={"https://diego-berardi.github.io/Simple-Calculator/"}
        linkGitHub={"https://github.com/Diego-Berardi/Simple-Calculator"}
        imgProject={calculatorImg}
      />
      <ProjectComponent
        fadeInAni={"fade-right"}
        title={"Tic Tac Toe Game VS A.I."}
        textP={`Basic Tic Tac Toe game. You can choose to play in 2 players or alone
            vs the unbeateble AI `}
        technologies={"- HTML CSS JavaScript"}
        linkProject={"https://diego-berardi.github.io/Tic-Tac-Toe/"}
        linkGitHub={"https://github.com/Diego-Berardi/Tic-Tac-Toe"}
        imgProject={ticTacToeImg}
      />
    </section>
  );
};

export default WorkSection;
