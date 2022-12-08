import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import DashboardComponent from "../../components/DashboardComponent/DashboardComponent";
import { fetchExpToken } from "./../../utils/Utils";
import { updateKeyObject } from "./../../reducers/localstorageSlice";
import { toggleHamburger } from "./../../reducers/commonSlice";
import Profile from "../../components/common/Header/Profile";
import { NavLink } from "react-router-dom";

function DashboardContainer(props) {
  const { updateKeyObject, toggleHamburger } = props;
  const fetchToken = async () => {
    const res = await fetchExpToken();

    const { status, data } = res;
    if (status === 200) {
      updateKeyObject(data);
      return;
    }
    return;
  };
  useEffect(() => {
    fetchToken();
  }, []);
  return (
    <>
      <div className="d-flex flex-column bg-lightgray">
        <div className="dashBoardSubheader">
          <div className="logo">
            <NavLink to="/">
              <img src="/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="dashboardMobileHeader">
            <Profile toggleHamburger={toggleHamburger} />
          </div>
        </div>
        <DashboardComponent />
      </div>
    </>
  );
}

const mapDispatchToProps = {
  updateKeyObject,
  toggleHamburger,
};

export default connect(null, mapDispatchToProps)(DashboardContainer);
