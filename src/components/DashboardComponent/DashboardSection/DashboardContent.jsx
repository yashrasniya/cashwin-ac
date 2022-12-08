import React from "react";

function DashboardContent() {
  return (
    <div className="dashboardContent">
      <div className="count">
        <img src="/assets/icons/up-arrow.svg" alt="" />
        <span>2.06x</span>
      </div>
      <div className="bet-payout-div">
        <div className="bet-input input-div">
          <div className="form-group">
            <label htmlFor="bet">Bet :</label>
            <input
              min="0"
              type="number"
              className="form-control"
              id="bet"
              aria-describedby="bet"
              placeholder="Enter bet"
            />
          </div>
          <span className="max-count bet-count">
            Max bet : 44.3
            <img src="/assets/icons/coins.svg" alt="" />
          </span>
        </div>
        <div className="payout-input input-div">
          <div className="form-group">
            <label htmlFor="payout">Payout :</label>
            <input
              min="0"
              type="number"
              className="form-control"
              id="payout"
              aria-describedby="payout"
              placeholder="Enter payout"
            />
          </div>
          <span className="max-count">
            Max Profit : 44.3
            <img src="/assets/icons/coins.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
