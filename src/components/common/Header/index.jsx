import React from "react";
import { Link } from "react-router-dom";
import DropdownOption from "./DropdownOption";
import "./header.scss";
import Profile from "./Profile";
function MainHeader() {
  return (
    <nav className="navbar mainHeader navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <div className="d-flex headerDropDown">
          {/* <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="me-2" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  // href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Profile />
                </div>
                <DropdownOption />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
