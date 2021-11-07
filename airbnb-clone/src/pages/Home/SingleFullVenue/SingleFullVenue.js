import React, { Component } from "react";
import "./SingleFullVenue.css";
import axios from "axios";

class SingleFullVenue extends Component {
  state = { singleVenue: {} };
  async componentDidMount() {
    const venueid = this.props.match.params.venueid;
    // console.log(venueId);
    const venueUrl = `${window.apiHost}/venue/${venueid}`;
    const axiosResponse = await axios.get(venueUrl);
    const singleVenue = axiosResponse.data;
    // console.log(singleVenue);
    this.setState({ singleVenue });
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
        </div>
      </div>
    );
  }
}

export default SingleFullVenue;
