import React from "react";
import { useState } from "react";

export default function UseStateObject() {
  const [person, setPerson] = useState({
    name: "katia",
    age: 32,
    message: "hello from katia",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "hello from react" });
  };
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </div>
  );
}
