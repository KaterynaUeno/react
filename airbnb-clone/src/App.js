import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./utility/NavBar/NavBar";
import SingleFullVenue from "./pages/Home/SingleFullVenue/SingleFullVenue";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/venue/:venueid" component={SingleFullVenue} />
    </Router>
  );
}

export default App;
