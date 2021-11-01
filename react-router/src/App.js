// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Home = () => <h1>Home</h1>;
const Host = () => <h1>Host</h1>;
const Help = () => <h1>Help</h1>;
const Signup = () => <h1>Sign up</h1>;
const Login = () => <h1>Log in</h1>;
function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/host" component={Host} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
