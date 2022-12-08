import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import {
  closeSideBar,
  toggleHamburger,
} from "./../../../../reducers/commonSlice";
import "./sidebar.scss";
function Sidebar(props) {
  const { openSidebar, toggleHamburger, closeSideBar } = props;
  const navigate = useNavigate();
  // const [openSidebar, setOpenSidebar] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  // const toggleHamburger = () => {
  //   setOpenSidebar(!openSidebar);
  // };
  return (
    <div className="sidebarMainDiv">
      {/* {!openSidebar && (
        <div className="hamburger" onClick={toggleHamburger}>
          <img src="/assets/icons/hamburger-icon.svg" alt="" />
        </div>
      )} */}

      {openSidebar && (
        <div className="sidebarContainer">
          <div className="position-relative h-100 wrapper">
            <img
              onClick={toggleHamburger}
              className="sidebarIcon"
              src="/assets/icons/white-cross-icon.svg"
              alt=""
            />
            <div className="sidebarContent">
              <div
                onClick={() => {
                  closeSideBar(false);
                  navigate("/");
                }}
              >
                <Profile dropdown={true} />
              </div>
              <hr />
              <ul className="sidebar-items">
                <li className="sidebar-item">
                  <Link onClick={() => closeSideBar(false)} to="/betHistory">
                    Bet History
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link onClick={() => closeSideBar(false)} to="/profitLoss">
                    Profit/ Loss Report
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    onClick={() => closeSideBar(false)}
                    to="/setButtonValue"
                  >
                    Set Button Values
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    onClick={() => closeSideBar(false)}
                    to="/changePassword"
                  >
                    Change Password
                  </Link>
                </li>
                <div className="logoutDiv">
                  {/* <hr /> */}
                  <button className="btn btn-primary" onClick={handleLogout}>
                    <img
                      src="/assets/icons/logout.svg"
                      alt="logout-icon"
                      className="logoutIcon"
                    />{" "}
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({ common }) => ({
  openSidebar: common["openSideBar"],
});

const mapDispatchToProps = {
  toggleHamburger,
  closeSideBar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
