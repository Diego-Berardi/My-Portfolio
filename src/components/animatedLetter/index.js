import React from "react";
import "./index.scss";

const AnimatedLetter = ({ letterClass, arrLetters, index }) => {
  const removeAnimation = (e) => {
    const currentTarget = e.target;
    currentTarget.classList.remove("rubberBand");
    currentTarget.classList.remove("text-animate");
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
