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
  render() {
    // console.log(this.state.singleVenue);
    return (
      <div className="row single-venue">
        <div className="col s12 center">
          <img src={this.state.singleVenue.imageUrl} alt="" />
        </div>
        <div className="col s8 location-details offset-s2 ">
          <div className="location">{this.state.singleVenue.location}</div>
          <div className="title">{this.state.singleVenue.title}</div>
          <div className="guests">{this.state.singleVenue.guests}</div>
          {this.state.points}
        </div>
      </div>
    );
  }
}

export default SingleFullVenue;
