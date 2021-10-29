import React, { Component } from "react";
import "./temperatureInput.css";

class TemperatureInput extends Component {
  render() {
    // const temperature = this.props.temperature;
    // const scale = this.props.scale;
    const { temperature, scale, handleChange } = this.props;
    let style;
    let hotClass;
    if (
      (temperature > 100 && scale === "C") ||
      (temperature > 212 && scale === "F")
    ) {
      style = {
        color: "red",
        backgroundColor: "orange",
      };
      hotClass = "too-hot";
    }
    return (
      <div className="temp-input">
        <legend className={hotClass}>Enter temperature in {scale}</legend>
        <input
          value={temperature}
          onChange={(e) => {
            handleChange(e.target.value, scale);
          }}
        />
      </div>
    );
  }
}

export default TemperatureInput;
