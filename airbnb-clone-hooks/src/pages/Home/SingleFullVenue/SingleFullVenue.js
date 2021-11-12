import React, { Component } from "react";
import "../../../App.css";
import "./SingleFullVenue.css";
import axios from "axios";
import Point from "./Point";
import { connect } from "react-redux";
import openModal from "../../../actions/openModal";
import { bindActionCreators } from "redux";
import Login from "../../Home/../Login/Login";
import moment from "moment";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
// import loadScript from "../../../utility/utilityFunctions/loadScript";

const MySwal = withReactContent(Swal);

class SingleFullVenue extends Component {
  state = {
    singleVenue: {},
    points: [],
    checkin: "",
    checkout: "",
    numberOfGuests: 1,
  };
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

  changeNumberofGuests = (e) => {
    this.setState({ numberOfGuests: e.target.value });
  };
  changeCheckin = (e) => {
    this.setState({ checkin: e.target.value });
  };
  changeCheckout = (e) => {
    this.setState({ checkout: e.target.value });
  };
  reserve = async (event) => {
    // console.log(event);
    const startDayMoment = moment(this.state.checkin);
    const endDayMoment = moment(this.state.checkout);
    // console.log(startDayMoment);
    const diffDays = endDayMoment.diff(startDayMoment, "days");
    // console.log(diffDays);
    if (diffDays < 1) {
      MySwal.fire({
        title: "Invalid date",
        text: "Check-in day should be before check-out day",
        icon: "error",
      });
    } else if (isNaN(diffDays)) {
      MySwal.fire({
        title: "Invalid date",
        text: "Please enter check-out date",
        icon: "error",
      });
    } else {
      const pricePerNight = this.state.singleVenue.pricePerNight;
      const totalPrice = pricePerNight * diffDays;

      // const scriptUrl = "https://js.stripe.com/v3";
      // const stripePublicKey =
      //   "pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT";
      // Moving the below code to it's own module
      // await new Promise((resolve, reject)=>{
      //     const script = document.createElement('script');
      //     script.type = 'text/javascript';
      //     script.src = scriptUrl;
      //     script.onload = ()=>{
      //         console.log("The script has loaded!")
      //         resolve();
      //     }
      //     document.getElementsByTagName('head')[0].appendChild(script);
      //     console.log("The script has been added to the head!")
      // })
      // await loadScript(scriptUrl); // we dont need a variable, we just need to wait
      // // console.log("Let's run some Stripe")
      // const stripe = window.Stripe(stripePublicKey);
      // const stripeSessionUrl = `${window.apiHost}/payment/create-session`;
      // const data = {
      //   venueData: this.state.singleVenue,
      //   totalPrice,
      //   diffDays,
      //   pricePerNight,
      //   checkIn: this.state.checkn,
      //   checkOut: this.state.checkOut,
      //   token: this.props.auth.token,
      //   numberOfGuests: this.state.numberOfGuests,
      //   currency: "USD",
      // };

      // const sessionVar = await axios.post(stripeSessionUrl, data);
      // console.log(sessionVar.data);
      // stripe
      //   .redirectToCheckout({
      //     sessionId: sessionVar.data.id,
      //   })
      //   .then((result) => {
      //     console.log(result);
      //     //if the network fails, this will run
      //   });
    }
  };

  //     const scriptUrl = "https://js.stripe.com/v3";
  //     const stripePublicKey =
  //       "pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT";
  //     await new Promise((resolve, reject) => {
  //       const script = document.createElement("script");
  //       script.type = "text/javascript";
  //       script.src = scriptUrl;
  //       script.onload = () => {
  //         resolve();
  //       };
  //       document.getElementsByTagName("head")[0].appendChild(script);
  //     });
  //     const stripe = window.Stripe(stripePublicKey);
  //     const sessionStripeUrl = `${window.apiHost}/payment/create-session`;
  //     const response = await axios.post(sessionStripeUrl);
  //     console.log(response);
  //     const data = {
  //       venueData: this.state.singleVenue,
  //       totalPrice,
  //       pricePerNight,
  //       checkin: this.state.checkin,
  //       checkout: this.state.checkout,
  //       token: this.props.auth.token,
  //       currency: "USD",
  //     };
  //     const sessionVar = await axios.post(sessionStripeUrl, data);
  //     console.log(sessionVar.data);
  //     // stripe
  //     // .redirectToCheckout({
  //     //   sessionId: sessionVar.data.id,
  //     // })
  //     // .then((result) => {
  //     //   console.log(result);
  //     // });
  //   }
  // };
  render() {
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
                {this.props.auth.token ? (
                  <button onClick={this.reserve} className="btn pink">
                    {" "}
                    Reserve
                  </button>
                ) : (
                  <div>
                    You must{" "}
                    <h4
                      className="link"
                      onClick={() => {
                        this.props.openModal("open", <Login />);
                      }}
                    >
                      Log in{" "}
                    </h4>
                    log in to reserve a venue{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openModal,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleFullVenue);
