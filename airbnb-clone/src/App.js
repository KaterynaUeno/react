import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./utility/NavBar/NavBar";
import SingleFullVenue from "./pages/Home/SingleFullVenue/SingleFullVenue";
import Modal from "./utility/Modal/Modal";
import CityVenues from "./pages/Home/CityVenues/CityVenues";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/venue/:venueid" component={SingleFullVenue} />
      <Route path="/" component={Modal} />
      <Route exact path="/city/:cityName" component={CityVenues} />
      <Route
        exact
        path="/payment-success/:stripeToken"
        component={PaymentSuccess}
      />
    </Router>
  );
}

export default App;
