import React, { Component } from "react";
import "./App.css";
// import SimpleEvents from "./SimpleEvents";
// import StateInAction from "./StateInAction";
// import EventAndState from "./EventAndState";
// import StatePractice from "./StatePractice";
import CardSet from "./CardSet";
import cards from "./cards";

// console.log(data);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <CardSet cards={cards} />
        </div>
      </div>
    );
  }
}

export default App;
