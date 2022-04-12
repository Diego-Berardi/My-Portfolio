import React from "react";
import "./index.scss";

// imgs
import netflixImg from "../../assets/img/netflix2.png";
import theNewYorkTimesImg from "../../assets/img/theNewYorkTimes.png";
import hackerNewsImg from "../../assets/img/hackerNews.png";
import calculatorImg from "../../assets/img/calculator.png";
import ticTacToeImg from "../../assets/img/TicTacToe.png";
import snakeGameImg from "../../assets/img/Screenshot-Snake-Game.png";
import chessGameImg from "../../assets/img/chessGame.png";

//components
import ProjectComponent from "../projectComponent";
// icons
import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";

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
        technologies={[
          <FaReact className="react" key="react" />,
          <AiFillHtml5 className="html" key="html" />,
          <IoLogoCss3 className="css" key="css" />,
          <IoLogoJavascript className="javascript" key="javascript" />,
          <SiSass className="sass" key="sass" />,
        ]}
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
        technologies={[
          <FaReact className="react" key="react" />,
          <AiFillHtml5 className="html" key="html" />,
          <IoLogoCss3 className="css" key="css" />,
          <IoLogoJavascript className="javascript" key="javascript" />,
          <SiSass className="sass" key="sass" />,
        ]}
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
        technologies={[
          <AiFillHtml5 className="html" key="html" />,
          <IoLogoCss3 className="css" key="css" />,
          <IoLogoJavascript className="javascript" key="javascript" />,
          <SiSass className="sass" key="sass" />,
        ]}
        linkProject={"https://hacker-news-start2impact.netlify.app/"}
        linkGitHub={"https://github.com/Diego-Berardi/hacker-news-Start2Impact"}
        imgProject={hackerNewsImg}
      />
      <ProjectComponent
        fadeInAni={"fade-left"}
        title={"Snake Game"}
        textP={`Snake game project, move the snake with your arrow keys, go eat the green cube and try to make the beast score!`}
        technologies={[
          <AiFillHtml5 className="html" key="html" />,
          <IoLogoCss3 className="css" key="css" />,
          <IoLogoJavascript className="javascript" key="javascript" />,
        ]}
        linkProject={"https://diego-berardi.github.io/Snake-Game/"}
        linkGitHub={"https://github.com/Diego-Berardi/Snake-game"}
        imgProject={snakeGameImg}
      />
      <ProjectComponent
        fadeInAni={"fade-right"}
        title={"Chess Game"}
        textP={`Virtual chess board where you can play chess 1vs1 offline.`}
        technologies={[
          <AiFillHtml5 className="html" key="html" />,
          <IoLogoCss3 className="css" key="css" />,
          <IoLogoJavascript className="javascript" key="javascript" />,
        ]}
        linkProject={"https://diego-berardi.github.io/Chess-Game/"}
        linkGitHub={"https://github.com/Diego-Berardi/Chess-game"}
        imgProject={chessGameImg}
      />
        <ProjectComponent
          fadeInAni={"fade-right"}
          title={"Tic Tac Toe Game VS A.I."}
          textP={`Basic Tic Tac Toe game. You can choose to play in 2 players or alone
              vs the unbeateble artificial inteligence. The A.I. is developed with the Minimax algorthm. `}
          technologies={[
            <AiFillHtml5 className="html" key="html" />,
            <IoLogoCss3 className="css" key="css" />,
            <IoLogoJavascript className="javascript" key="javascript" />,
          ]}
          linkProject={"https://diego-berardi.github.io/Tic-Tac-Toe/"}
          linkGitHub={"https://github.com/Diego-Berardi/Tic-Tac-Toe"}
          imgProject={ticTacToeImg}
        />

      <ProjectComponent
        fadeInAni={"fade-left"}
        title={"Calculator JavaScript"}
        textP={`Simple calculator built with HTML, CSS and JavaScript `}
        technologies={[
          <AiFillHtml5 className="html" key="html" />,
          <IoLogoCss3 className="css" key="css" />,
          <IoLogoJavascript className="javascript" key="javascript" />,
        ]}
        linkProject={"https://diego-berardi.github.io/Simple-Calculator/"}
        linkGitHub={"https://github.com/Diego-Berardi/Simple-Calculator"}
        imgProject={calculatorImg}
      />
    </section>
  );
};

export default WorkSection;
