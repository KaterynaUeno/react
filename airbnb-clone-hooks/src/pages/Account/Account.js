import React, { useState, useEffect } from "react";
import "./Account.css";
// import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
// import AccoutSideBar from "./AccountSideBar";
import Bookings from "./Bookings";
import ChangePassword from "./ChangePassword";
import AccountSideBar from "./AccountSideBar";

function Account(props) {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const [pastBookings, setPastBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    const accountUrl = `${window.apiHost}/users/getBookings`;
    const data = {
      token: token,
    };
    const fetchAccountData = async () => {
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
      setUpcomingBookings(upcomingBookings);
      setPastBookings(pastBookings);
    };
    fetchAccountData();
  }, []);

  // console.log(upcomingBookings);
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
          <Route exact path="/acount/reservations/confirmed">
            <Bookings
              type="upcoming"
              bookings={upcomingBookings}
              token={token}
            />
          </Route>
          <Route exact path="/acount/reservations/past">
            <Bookings type="past" bookings={pastBookings} />
          </Route>
          <Route exact path="/acount/change-pass" component={ChangePassword} />
        </div>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     state: state.auth,
//   };
// }
// export default connect(mapStateToProps)(Account);
export default Account;
