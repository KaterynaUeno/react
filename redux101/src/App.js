import React from "react";
import "./App.css";
import FrozenDept from "./components/FrozenDept";
import MeatDept from "./components/MeatDept";
function App() {
  return (
    <div className="App">
      <FrozenDept />
      <MeatDept />
    </div>
  );
}

export default App;
