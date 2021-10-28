// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Headers from "./Headers";
import Modal from "./Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      city: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
    };
  }
  componentDidMount() {
    this.getCityWeather("London");
    const elems = document.querySelectorAll(".modal");
    const instances = window.M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("component has updated");
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      if (isRaining) {
        this.setState({
          isRaining: "Rain rain go away!",
        });
      }
    }
  }

  searchCity = (event) => {
    event.preventDefault();
    // console.log("form submitted");
    const city = document.getElementById("city").value;
    this.getCityWeather(city);
  };

  getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=77ef59c89e2314e4b004c6a6063a4a21`;
    axios.get(url).then((resp) => {
      // console.log(resp.data.name);
      this.setState({
        temp: resp.data.main.temp,
        city: resp.data.name,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
      });
    });
  };
  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
    return (
      <div className="App">
        <div className="row">
          <Headers />
          <div className="col s6 offset-s3">
            <h1>Weather today</h1>

            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
            >
              Details
            </a>
            <form onSubmit={this.searchCity}>
              <input id="city" type="text" placeholder="Enter a city name" />
            </form>
          </div>
        </div>
        <Modal />
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.city}</h4>
            <p>{this.state.isRaining}</p>
            <p>
              High: {this.state.high} - Low: {this.state.low}
            </p>
            <p>
              {this.state.weather} <img src={iconUrl} alt="" />
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
