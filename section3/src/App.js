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
    };
  }

  componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=78753ac2829720b600f59b287f686674";
    axios.get(url).then((resp) => {
      console.log(resp.data.name);
      this.setState = {
        temp: resp.data.main.temp,
        city: resp.data.name,
      };
    });
    const elems = document.querySelectorAll(".modal");
    const instances = window.M.Modal.init(elems);
  }
  render() {
    return (
      <div className="App">
        <h1>
          Weather in {this.state.city} is
          {this.state.temp}
        </h1>

        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Modal
        </a>

        {/* <!-- Modal Structure --> */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
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
