import React, { Component } from "react";
// import "./Venue.css";
import { Link } from "react-router-dom";
class Venue extends Component {
  render() {
    const { id, title, location, pricePerNight, imageUrl, rating } =
      this.props.venue;
    return (
      <div className="venue col s12">
        <Link to={`/venue/${id}`}>
          <div className="image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="venue-title">{title}</div>
          <div className="venue-location">{location}</div>
          <div className="venue-price">{pricePerNight}/night</div>
          <div className="venue-rating">
            <i className="material-icons tiny">star</i>
            {rating}
          </div>
        </Link>
      </div>
    );
  }
}

export default Venue;
