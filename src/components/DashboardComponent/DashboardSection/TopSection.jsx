import React from "react";

function TopSection() {
  return (
    <div className="topSection">
      <h1>Dashboard</h1>
      <div className="rightFilter">
        <div className="down">
          <img src="/assets/icons/down-arrow.svg" alt="" /> 1.35x
        </div>
        <div className="up">
          <img src="/assets/icons/up-arrow.svg" alt="" /> 1.35x
        </div>
      </div>
    </div>
  );
}

export default TopSection;
