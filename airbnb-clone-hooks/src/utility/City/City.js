import React, { Component } from "react";
import "./City.css";
import { Link } from "react-router-dom";

class City extends Component {
  render() {
    // console.log(this.props.city.cityName);
    const { cityName, image, price } = this.props.city;
    return (
      <div className="city col s12">
        {/* {this.props.city.cityName} */}
        <Link to={`/city/${cityName}`}>
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="city-name">{cityName}</div>
          <div className="price">${price}/night average</div>
        </Link>
      </div>
    );
  }
}

export default City;
