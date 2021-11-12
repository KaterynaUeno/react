import React, { Component } from "react";
import axios from "axios";

class CityWeather extends Component {
  state = {
    cityData: {},
  };

  async componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.cityName !== this.props.cityName) {
      this.getWeather();
    }
  }

  getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=metric&appid=77ef59c89e2314e4b004c6a6063a4a21`;
    const resp = await axios.get(url);
    this.setState({
      cityData: resp.data,
    });
    console.log(resp.data);
  };

  render() {
    if (!this.state.cityData.name) {
      return <h1>Loading...</h1>;
    }
    const iconUrl = `http://openweathermap.org/img/w/${this.state.cityData.weather[0].icon}.png`;

    return (
      <div className="container">
        <div className="city-name">{this.state.cityData.name}</div>
        <div className="temp">
          {this.state.cityData.main.temp} <img src={iconUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default CityWeather;
