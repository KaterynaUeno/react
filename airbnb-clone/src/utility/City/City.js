import React, { Component } from "react";
import "./City.css";

class City extends Component {
  render() {
    // console.log(this.props.city.cityName);
    const { cityName, image, price } = this.props.city;
    return (
      <div className="city col s12">
        {/* {this.props.city.cityName} */}
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="city-name">{cityName}</div>
        <div className="price">${price}/night average</div> */}
      </div>
    );
  }
}

export default City;