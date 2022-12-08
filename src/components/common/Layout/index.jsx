import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import SubLinks from "../../UnSettledBetComponent/SubLinks/SubLinks";
import MainHeader from "../Header";
import Sidebar from "../Header/Sidebar";
import "./layout.scss";
function Layout() {
  const param = useParams();
  const { gameName = "" } = param;
  const { pathname } = useLocation();
  const [subHeader, setSubHeader] = useState("abc");
  const subHeaderObj = {
    "/betHistory": "Bet History",
    "/profitLoss": "Profit/ Loss Report",
    "/setButtonValue": "Set Button Values",
    "/changePassword": "Change Password",
  };
  const getSubHeader = (path) => {
    return subHeaderObj[path];
  };

  useEffect(() => {
    setSubHeader(getSubHeader(pathname));
  }, [pathname]);
  return (
    <>
      <MainHeader />
      {<Sidebar />}
      {subHeader && (
        <div className="subHeader">
          <div className="container">
            <h1>{subHeader}</h1>
            {pathname.includes("unSettledBet") && <SubLinks />}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Layout;
