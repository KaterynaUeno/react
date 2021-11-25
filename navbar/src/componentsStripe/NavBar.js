import React from "react";
import { useGlobalContext } from "../stripeContext";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.jpg";

export default function NavBar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="love"></img>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links"></ul>
        <li>
          <button className="link-btn">products</button>
        </li>
        <li>
          <button className="link-btn">developers</button>
        </li>
        <li>
          <button className="link-btn">company</button>
        </li>
      </div>
    </nav>
  );
}
