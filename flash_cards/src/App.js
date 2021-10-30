import React, { Component } from "react";
import "./App.css";
import QuizBar from "./components/QuizBar";
import FlashCard from "./components/FlashCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardStyle: "Random",
    };
  }

  userChoice = (cardStyle) => {
    this.setState({
      cardStyle,
    });
  };
  render() {
    console.log(this.state.cardStyle);
    return (
      <div className="App">
        <QuizBar userChoice={this.userChoice} />
        <FlashCard />
      </div>
    );
  }
}

export default App;
