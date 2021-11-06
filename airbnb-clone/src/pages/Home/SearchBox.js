import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    where: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
  };
  changeWhere = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({ where: e.target.value });
  };
  changeCheckIn = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({ checkIn: e.target.value });
  };
  changeCheckOut = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({ checkOut: e.target.value });
  };
  changeGuests = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({ guests: e.target.value });
  };
  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do</h1>
        <form className="search-box-form">
          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input
                onChange={this.changeWhere}
                value={this.state.where}
                placeholder="anywhere"
                type="text"
              ></input>
            </div>
          </div>
          <div className="col m6">
            <div className="form-label">Check-in</div>
            <div className="input-field" id="check-in">
              <input
                onChange={this.changeCheckIn}
                value={this.state.checkIn}
                type="date"
              ></input>
            </div>
          </div>
          <div className="col m6">
            <div className="form-label">Check-out</div>
            <div className="input-field" id="check-out">
              <input
                onChange={this.changeCheckOut}
                value={this.state.checkOut}
                type="date"
              ></input>
            </div>
          </div>
          <div className="col m12">
            <div className="form-label">Guests</div>
            <div className="input-field" id="guests">
              <input
                onChange={this.changeGuests}
                value={this.state.guests}
                placeholder="guests"
                type="number"
              ></input>
            </div>
          </div>
          <div className="col m12 submit-btn">
            <div className="input-filed" id="submit-btn">
              <input
                className="btn-large waves-effect waves-light red accent-2"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
