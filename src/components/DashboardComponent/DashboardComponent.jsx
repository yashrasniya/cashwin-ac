import React from "react";
import DashboardSlide from "./DashboardSlide";
import "./dashboard.scss";
import Games from "./Games/Games";
import DashboardSection from "./DashboardSection";
function DashboardComponent() {
  return (
    <div className="container dashboard-container">
      <DashboardSlide />
      <Games />
      <DashboardSection />
    </div>
  );
}

export default DashboardComponent;
