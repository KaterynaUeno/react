// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";

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
    };
  }

  componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=78753ac2829720b600f59b287f686674";
    axios.get(url).then((resp) => {
      console.log(resp.data.name);
      this.setState({
        temp: resp.data.main.temp,
        city: resp.data.name,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
      });
    });
    const elems = document.querySelectorAll(".modal");
    const instances = window.M.Modal.init(elems);
  }
  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
    return (
      <div className="App">
        <h1>
          Weather today
          {/* Weather in {this.state.city} is {this.state.temp} */}
        </h1>

        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Details
        </a>

        {/* <!-- Modal Structure --> */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.city}</h4>
            <p>
              High: {this.state.high} - Low: {this.state.low}
            </p>
            <p>
              {this.state.weather} <img src={iconUrl} />
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
