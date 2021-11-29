import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

const Navbar = () => {
  let iconStyles = { color: "pink", fontSize: "2rem" };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <FaCocktail style={iconStyles} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
