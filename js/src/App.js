import React from "react";
import "./App.css";
import { useState } from "react";

import data from "./data";
import List from "./componentsProjects/List";
import AlertDialog from "./componentsProjects/AlertDialog";
// import ErrorExample from "./components/ErrorExample";
// import Use StateCounter from "./components/UseStateCounter";
// import UseStateObject from "./components/UseStateObject";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      {/* <section className="container"> */}
      {/* <ErrorExample /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}
      {/* <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section> */}
      <AlertDialog />
    </main>
  );
}

export default App;
