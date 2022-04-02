import React, { useState } from "react";
import "./index.scss";

const AnimatedLetter = ({ letterClass, setLetterClass, arrLetters, index }) => {
  const removeAnimation = (e) => {
    const currentTarget = e.target;

    if (currentTarget.classList[0] !== "text-animate") return;
    console.log(currentTarget.classList[0]);

    currentTarget.classList.remove("text-animate");
    currentTarget.classList.remove("rubberBand");
    currentTarget.addEventListener("animationend", () => {
      currentTarget.classList.remove("rubberBand");
      currentTarget.classList.remove("rubberBand2");
    });
    currentTarget.addEventListener("mouseover", () =>
      currentTarget.classList.add("rubberBand")
    );
    currentTarget.addEventListener("click", () =>
      currentTarget.classList.add("rubberBand")
    );
  };

  return (
    <>
      {arrLetters.map((elem, i) => {
        return (
          <span
            onAnimationEnd={removeAnimation}
            key={elem + i + index}
            className={`${letterClass}  _${i + index} `}
          >
            {elem}
          </span>
        );
      })}
    </>
  );
};

export default AnimatedLetter;
