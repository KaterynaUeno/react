import React from "react";
import { useState } from "react";

export default function ErrorExample() {
  let title = "random title";
  const [text, setText] = useState("Random text");
  const handleClick = () => {
    if (text === "Random text") {
      setText("Random text changed with state");
    } else {
      setText("Random text");
    }
    // title = "hello people";
    // console.log(title);
    //we need to rerender title to display it. Thats why we need use state
  };
  return (
    <div>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </div>
  );
}
