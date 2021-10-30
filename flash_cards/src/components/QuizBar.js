import React from "react";
import QuizType from "./QuizType";

function QuizBar(props) {
  return (
    <div className="Quiz-bar">
      <h1>Choose your study type</h1>
      <ul className="nav nav-pills nav-fill">
        <QuizType icon="dice" quizType="Random" userChoice={props.userChoice} />
        <QuizType
          icon="dumbbell"
          quizType="Regular"
          userChoice={props.userChoice}
        />
        <QuizType
          icon="font"
          quizType="Weighted"
          userChoice={props.userChoice}
        />
        <QuizType
          icon="file-alt"
          quizType="Multi"
          userChoice={props.userChoice}
        />
      </ul>
    </div>
  );
}

export default QuizBar;
