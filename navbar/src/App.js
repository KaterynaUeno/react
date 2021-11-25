import "./App.css";
import React from "react";
// import NavBar from "./components/NavBar";
// import Modal from "./components/Modal";
// import Sidebar from "./components/Sidebar";
// import Home from "./components/Home";
// import "./sidebar.css";
import "./stripe.css";
import NavBar from "./componentsStripe/NavBar";
import Hero from "./componentsStripe/Hero";
import Sidebar from "./componentsStripe/Sidebar";
import Submenu from "./componentsStripe/Submenu";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Home />
      <Modal />
      <Sidebar /> */}
      <NavBar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
