import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../utility/Spinner/Spinner";
import "./Payment.css";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faLongArrowAltRight);

class PaymentSuccess extends Component {
  state = {
    reservationDetails: {},
    venueData: {},
    waiting: true,
  };

  async componentDidMount() {
    const stripeToken = this.props.match.params.stripeToken;
    const token = this.props.auth.token;
    const data = { stripeToken, token };
    const successUrl = `${window.apiHost}/payment/success`;
    const response = await axios.post(successUrl, data);
    // console.log(response.data);
    this.setState({
      reservationDetails: response.data.reservationDetails,
      userData: response.data.userData,
      waiting: false,
    });
  }
  render() {
    if (this.state.waiting) {
      return <Spinner />;
    }
    const reservDetail = this.state.reservationDetails;
    const venueDetail = reservDetail.venueData;
    return (
      <div>
        <div className="reservation-success row">
          <h1 className="col m12 center"> Start Packing!</h1>
          <div className="resv-details col s8 offset-s2">
            <div className="confirmed col m12 row">
              <div className="reservation-success row">
                <h1 className="col m12 center">Start Packing!</h1>
                <div className="resv-details col s8 offset-s2">
                  <div className="confirmed col m12 row">
                    <FontAwesomeIcon
                      icon="long-arrow-alt-right"
                      size="1x"
                      color="#ED0000"
                    />
                    Confirmed: {reservDetail.diffDays}nights in{" "}
                    {venueDetail.location}
                    <div className="header-text">
                      <div>Booked by:{this.props.auth.user} </div>
                      <div>{moment().format("MMMM Do, YYYY")}</div>
                    </div>
                  </div>
                  <div className="confirmed-detail row">
                    <div className="col m5">
                      <div className="bordered col">
                        <div className="col m12 upper">
                          <div className="left">Check in</div>
                          <div className="right">Check out</div>
                        </div>
                        <div className="col m12 lower">
                          <div className="left">
                            {moment(reservDetail.checkin).format(
                              "MMM Do, YYYY"
                            )}
                          </div>
                          <div className="right">
                            {moment(reservDetail.checkout).format(
                              "MMM Do, YYYY"
                            )}
                          </div>
                        </div>
                        <div className="col m12 title-text">
                          {venueDetail.title}
                        </div>
                        <div className="col m12 details">
                          {venueDetail.details}
                        </div>
                      </div>
                    </div>
                    <div className="col m7">
                      <div className="bordered col">
                        <div className="col m12 upper charges">
                          <div className="charges-text col m12">Charges</div>
                          <div className="row col m12">
                            <div className="left">
                              {reservDetail.pricePerNight} x{" "}
                              {reservDetail.diffDays} nights
                            </div>
                            <div className="right">
                              {reservDetail.totalPrice}
                            </div>
                          </div>
                          <div className="row col m12">
                            <div className="left">Discount</div>
                            <div className="right">$0</div>
                          </div>
                          <div className="row col m12 total">
                            <div className="left">TOTAL</div>
                            <div className="right">
                              {reservDetail.totalPrice}
                            </div>
                          </div>
                        </div>
                        <div className="col m12 row">
                          To rview or make changes to your reservation in the
                          future, visit your{" "}
                          <Link to="/account">account page</Link>.
                        </div>
                        <div className="col m12 resv-image">
                          <img src={venueDetail.imageUrl} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              Search all course questions
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
export default connect(mapStateToProps)(PaymentSuccess);
