import React from "react";
import CityWeather from "./CityWeather";

function WeatherApp(props) {
  changeCity = (e) => {};
  return (
    <div className="container">
      <CityWeather />
      <div className="row justify-content-center">
        <form onSubmit={this.changeCity}>
          <input type="text" />
          <input type="submit" className="btn btn-primary" value="search" />
        </form>
      </div>
    </div>
  );
}
export default WeatherApp;
