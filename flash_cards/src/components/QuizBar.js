import React from "react";
import QuizType from "./QuizType";

function QuizBar(props) {
  return (
    <div className="Quiz-bar">
      <h1>Choose your study type</h1>
      <QuizType />
      <ul className="nav nav-pills nav-fill"></ul>
    </div>
  );
}

export default QuizBar;
