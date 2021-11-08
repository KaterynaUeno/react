import React, { Component } from "react";
import "./SingleFullVenue.css";
import axios from "axios";
import Point from "./Point";
class SingleFullVenue extends Component {
  state = { singleVenue: {}, points: [] };
  async componentDidMount() {
    const venueid = this.props.match.params.venueid;
    // console.log(venueId);
    const venueUrl = `${window.apiHost}/venue/${venueid}`;
    const axiosResponse = await axios.get(venueUrl);
    const singleVenue = axiosResponse.data;
    // console.log(singleVenue);

    const pointsUrl = `${window.apiHost}/points/get`;
    const pointsAxiosResponse = await axios.get(pointsUrl);
    // const pointsResponse = pointsAxiosResponse.data;
    // console.log(pointsResponse);
    const points = singleVenue.points.split(",").map((point, index) => {
      return (
        <Point pointDesc={pointsAxiosResponse.data} point={point} key={index} />
      );
    });
    this.setState({ singleVenue, points });
  }
  reserve = (event) => {
    console.log(event);
  };
  render() {
    // console.log(this.state.singleVenue);
    return (
      <div className="row single-venue">
        <div className="col s12 center">
          <img src={this.state.singleVenue.imageUrl} alt="" />
        </div>
        <div className="col s8 location-details offset-s2 ">
          <div className="col s8 left-details">
            <div className="location">{this.state.singleVenue.location}</div>
            <div className="title">{this.state.singleVenue.title}</div>
            <div className="guests">{this.state.singleVenue.guests}</div>
            {this.state.points}
            <div className="details">{this.state.singleVenue.details}</div>
            <div className="details">{this.state.singleVenue.amenities}</div>
          </div>
          <div className="col s4 right-details">
            <div className="price-per-day">
              ${this.state.singleVenue.pricePerNight}
              <span>/night</span>
              <div className="rating">
                {" "}
                <i className="material-icons tiny">star</i>
                {this.state.singleVenue.rating}
              </div>
              <div className="col s6">
                Check-in
                <input type="date" onChange={this.changeCheckin} />
              </div>
              <div className="col s6">
                Check-Out
                <input type="date" onChange={this.changeCheckout} />
              </div>
              <div className="col s12">
                <select
                  className="browser-default"
                  onChange={this.changeNumber}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
              <div className="col s12 center">
                <button onClick={this.reserve} className="btn pink">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleFullVenue;
