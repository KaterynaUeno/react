import React, { Component } from "react";
import "./Activity.css";
import { Link } from "react-router-dom";

class Activity extends Component {
  render() {
    const { activityType, id, cost, image, title, rating } =
      this.props.activity;
    return (
      <div className="activity">
        <Link to={`/activity/${id}`}>
          <img src={image} alt="" />
          <div className="activity-type">{activityType}</div>
          <div className="activity-title">{title}</div>
          <div className="activity-cost"> From ${cost}/per person</div>
          <div className="activity-rating">
            {" "}
            <i className="material-icons tiny">star</i>
            {rating}
          </div>
        </Link>
      </div>
    );
  }
}

export default Activity;
