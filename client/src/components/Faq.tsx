import React, { useState } from "react";
import dropdown from "../assets/Icons/chevron_right.svg";
import top from "../assets/Icons/chevron top.svg";
import { FaqTypeScript } from "../types/Faq";

const Faq = ({ questions, answers }: FaqTypeScript) => {
  const [answer, setAnswer] = useState(false);

  const showAnswer = () => {
    setAnswer(!answer);
  };
  return (

    <div className="questions">
      <p>
        {questions}{" "}
        <img src={answer ? top : dropdown} onClick={showAnswer} alt="" />{" "}
      </p>
      {answer && <div className="ans">{answers}</div>}
    </div>
  );
};

export default Faq;
