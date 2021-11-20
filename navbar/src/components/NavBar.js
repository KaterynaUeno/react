import React, { useState, useEffect, useRef } from "react";
import logo from "../logo.jpg";
import { links, social } from "../data";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt=""></img>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container show-container">
            <ul className="links">
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <ul className="social-icons">
          {social.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a href={socialLink.url}>{socialLink.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
