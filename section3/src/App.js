// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
    };
  }

  componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=78753ac2829720b600f59b287f686674";
    axios.get(url).then((resp) => {
      // console.log(resp.data);
      this.setState = {
        temp: resp.data.main.temp,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default App;
