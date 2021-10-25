import React, { Component } from "react";
import "./App.css";
import StateInAction from "./StateInAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>State check</h1>
        <StateInAction />
      </div>
    );
  }
}

export default App;
