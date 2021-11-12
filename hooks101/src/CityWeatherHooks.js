import React, { useState, useEffect } from "react";
import axios from "axios";
function CityWeatherHooks(props) {
  const [cityData, changeCityData] = useState({});
  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=77ef59c89e2314e4b004c6a6063a4a21`;
      const response = await axios.get(url);
      console.log(response.data);
      changeCityData(response.data);
    };
    fetchWeather();
  }, [props.cityName]);
  if (!cityData.weather) {
    return <h1>Loading..</h1>;
  }
  const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`;
  return (
    <div className="container">
      <div className="city-name">{cityData.name}</div>
      <div className="temp">
        {cityData.main.temp} <img src={iconUrl} alt="" />
      </div>
    </div>
  );
}

export default CityWeatherHooks;
