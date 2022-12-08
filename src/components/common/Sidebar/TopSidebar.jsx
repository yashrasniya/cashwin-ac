import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateGameType } from "./../../../reducers/gameDataSlice";

function TopSidebar(props) {
  const { updateGameType, gamesData, scrollRef = null } = props;
  const { isGameActive = false } = gamesData;
  const {
    type = undefined,
    amount = undefined,
    value = undefined,
  } = gamesData.gameType;
  const { handleBetPlacedSocket = undefined } = props;
  const [betAmount, setBetAmount] = useState(amount);
  const [error, setError] = useState(false);
  const handleBid = () => {
    console.log("handleBid::::::");
    if (!betAmount) {
      return setError(true);
    }
    setError(false);
    handleBetPlacedSocket({
      betAmount,
    });
    setBetAmount(0);
    updateGameType({
      amount: betAmount,
    });
  };

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [value]);

  const img = <img src="/assets/icons/coins.svg" alt="coins" />;
  const navigate = useNavigate();
  return (
    // <div className="topDiv">
    //   <div className="header" role="button" onClick={() => navigate("/")}>
    //     Dashboard
    //   </div>
    //   <hr />
    //   <div className="content">
    //     <div className="exposureBalDiv">
    //       <div className="expBtn">Exposure: 6000 {img}</div>
    //       <div className="expBtn">Balance: 54000 {img}</div>
    //     </div>
    //     <div className="count">2.06x</div>
    //     <div className="betInputDiv">
    //       <div className="inputField">
    //         <label htmlFor="betDiv1" className="form-label">
    //           Bet:
    //         </label>
    //         <input
    //           type="number"
    //           placeholder="Enter bet"
    //           className="form-control"
    //           id="betDiv1"
    //         />
    //       </div>
    //       <div className="inputField">
    //         <label htmlFor="betDiv2" className="form-label">
    //           Bet:
    //         </label>
    //         <input
    //           type="number"
    //           placeholder="Enter bet"
    //           className="form-control"
    //           id="betDiv2"
    //         />
    //       </div>
    //       <div className="maxCount">
    //         <span>Max Bet:44.3 {img}</span>
    //         <span>Max Profit:44.3 {img}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="topDiv hideOnMobile">
      <div className="header">Place Bet</div>
      <hr />
      <div className="content">
        {/* <div className="exposureBalDiv">
          <div className="expBtn">Exposure: 6000 {img}</div>
          <div className="expBtn">Balance: 54000 {img}</div>
        </div> */}
        {/* <div className="count">2.06x</div> */}
        <div className="betInputDiv">
          <div className="inputField">
            <label htmlFor="betDiv1" className="form-label">
              Enter Amount:
            </label>
            <input
              disabled={!(type && isGameActive) ? true : false}
              type="number"
              placeholder="Enter bet"
              className={`form-control text-light ${
                !(type && isGameActive) && "input-disabled"
              }`}
              id="betDiv1"
              value={betAmount}
              min={0}
              onChange={(e) => {
                setError(false);
                setBetAmount(() => {
                  return e.target.value;
                });
              }}
            />
            {error && <span className="text-danger">Please add amount</span>}
            <button
              className="btn btn-primary w-100"
              onClick={handleBid}
              disabled={!(type && isGameActive) ? true : false}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  gamesData,
  isGameActive: gamesData.isGameActive,
});
const mapDispatchToProps = {
  updateGameType,
};
export default connect(mapStateToProps, mapDispatchToProps)(TopSidebar);
