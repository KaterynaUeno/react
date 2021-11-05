import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./utility/NavBar/NavBar";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      {/* <Switch> */}
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
