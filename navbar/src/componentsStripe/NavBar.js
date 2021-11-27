import React from "react";
import { useGlobalContext } from "../stripeContext";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.jpg";

export default function NavBar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const showSubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="love"></img>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={showSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubmenu}>
              company
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
