import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
