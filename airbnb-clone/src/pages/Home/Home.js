import React, { Component } from "react";
import "./Home.css";
import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
class Home extends Component {
  state = {
    cities: [],
    europeCities: {},
    asiaCities: {},
    exoticCities: {},
    activities: [],
  };
  async componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    const europeCitiesUrl = `${window.apiHost}/cities/europe`;
    const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
    const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

    const citiesPromises = [];
    citiesPromises.push(axios.get(citiesUrl));
    citiesPromises.push(axios.get(europeCitiesUrl));
    citiesPromises.push(axios.get(asiaCitiesUrl));
    citiesPromises.push(axios.get(exoticCitiesUrl));

    Promise.all(citiesPromises).then((data) => {
      // console.log(data[0].data);
      // console.log(data[1].data);
      // console.log(data[2].data);
      // console.log(data[3].data);
      const recomCities = data[0].data;
      const europeCities = data[1].data;
      const asiaCities = data[2].data;
      const exoticCities = data[3].data;
      this.setState({
        cities: recomCities,
        europeCities,
        asiaCities,
        exoticCities,
      });
    });
    const activitiesUrl = `${window.apiHost}/activities/today`;
    const activities = await axios.get(activitiesUrl);
    this.setState({
      activities: activities.data,
    });
  }
  render() {
    // console.log(this.state.activities);
    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="upper-fold">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Activities activities={this.state.activities} />
            </div>
            <div className="col s12">
              <Cities cities={this.state.cities} header="Recommended Cities" />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.europeCities.cities}
                header={this.state.europeCities.header}
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.asiaCities.cities}
                header={this.state.asiaCities.header}
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.exoticCities.cities}
                header={this.state.exoticCities.header}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

// Base API URL - https://airbnb-api.robertbunch.dev
// /cities/recommended

// /cities/:feature

// Available features:
// beach
// europe
// asia
// us
// exotic
// /city/:cityId

// /venues/recommended

// /venues/superHost

// /venue/:venueId`

// /activities/today

// /activities/:feature

// scenery
// baking
// diving
// animals
// /activity/:id

// /seach/:searchTerm

// /points/get

// /users/signup -- expects: email,password -- errors: {msg:invalidData} or {msg: "userExists"} -- success: { msg: "userAdded", token, email, }

// /users/login -- expects: email, password -- errors: {msg: "badPass"} or {msg: "noEmail"} -- badPass = valid username, but wrong passwrod -- noEmail = email is not registered -- success: { msg: "loggedIn", token, email, }

// /users/token-check -- expects: token -- errors: {msg: "invalidToken"} -- success: validatedToken

// /venues/city/:cityName -- expects: cityName -- success: [venues]

// /payment/create-session -- expects: venueData, totalPrice, diffDays, pricePerNight, checkIn, checkOut, token, numberOfGuest (default 2), currency (default: 'USD'), -- success: sessionVar (send it to Stripe for a checkout screen!) -- errors: {msg: "missingData"} -- success callback path: http://localhost:3000/payment-success/:token -- this is where Stripe is going to send the user after payment -- failure callback path: http://localhost:3000/payment-canceled/:token -- this is where Stripe is going to send the user if payment is canceled

// /payment/success -- expects: stripToken (in url), token -- success: { reservationDetails: { checkIn, checkOut, currency, diffDays, iat, numberOfGuests, pricePerNight, totalPrice, venueData: { All data about this venue! }
// }, userData } -- errors: {msg: error} (error is an object)

// /users/getBookings - expects: token (jwt) - success: [bookings] - errors: {msg:"badJwt"}

// /reservation/cancel - expects: token (jwt), bid - success: {msg: "cancelled"} - error: {msg: "badId"}

// /users/change-password - expects: token (jwt), newPassword, - success: {msg: "passUpdated"} - error: {msg: "badJwt"}

// /search/:searchTerm will respond with: { venues: [], cities: [], activities: [], }
