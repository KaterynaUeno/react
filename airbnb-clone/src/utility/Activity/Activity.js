import React, { Component } from "react";
import "./Activity.css";

class Activity extends Component {
  render() {
    const { activityType, id, cost, image, title, rating } =
      this.props.activity;
    return (
      <div className="activity">
        <img src={image} alt="" />
        <div className="activity-type">{activityType}</div>
        <div className="activity-title">{title}</div>
        <div className="activity-cost"> From ${cost}/per person</div>
        <div className="activity-rating">
          {" "}
          <i className="material-icons tiny">star</i>
          {rating}
        </div>
      </div>
    );
  }
}

export default Activity;
