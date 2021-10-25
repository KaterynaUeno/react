import React, { Component } from "react";
import "./App.css";
import SimpleEvents from "./SimpleEvents";
// import StateInAction from "./StateInAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleEvents />
      </div>
    );
  }
}

export default App;
