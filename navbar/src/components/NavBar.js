import React, { useStae, useEffect, useRef } from "react";
import logo from "../logo.jpg";
import { links, social } from "../data";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo}></img>
        </div>
        <div className="links-container show-container"></div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
};

export default NavBar;
