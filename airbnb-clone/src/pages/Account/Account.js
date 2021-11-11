import React, { Component } from "react";
import "./Account.css";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import { Route } from "react-router-dom";
import AccoutSideBar from "./AccountSideBar";
import Bookings from "./Bookings";
import ChangePassword from "./ChangePassword";
import AccountSideBar from "./AccountSideBar";

class Account extends Component {
  state = {
    pastBookings: [],
    upcomingBookings: [],
  };
  async componentDidMount() {
    const accountUrl = `${window.apiHost}/users/getBookings`;
    const data = {
      token: this.props.auth.token,
    };
    const response = await axios.post(accountUrl, data);
    let pastBookings = [];
    let upcomingBookings = [];
    response.data.forEach((booking) => {
      const today = moment();
      const checkOutDate = moment(booking.checkOut);
      const diffDays = checkOutDate.diff(today, "days");
      if (diffDays < 0) {
        pastBookings.push(booking);
      } else {
        upcomingBookings.push(booking);
      }
    });
  }
  render() {
    return (
      <div className="account container-fluid">
        <AccountSideBar />
        <div className="row">
          <div className="col s8 offset-s3">
            <Route
              exact
              path="/account"
              render={() => <h1>Choose an option from the left</h1>}
            />
            <Route
              exact
              path="/acount/reservations/confirmed"
              component={Bookings}
            />
            <Route
              exact
              path="/acount/reservations/past"
              component={Bookings}
            />
            <Route
              exact
              path="/acount/change-pass"
              component={ChangePassword}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.auth,
  };
}
export default connect(mapStateToProps)(Account);
