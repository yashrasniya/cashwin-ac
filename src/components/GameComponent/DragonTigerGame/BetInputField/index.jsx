import React, { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  updateGameType,
  resetGameType,
} from "./../../../../reducers/gameDataSlice";
import "./betInputField.scss";

function BetInputField(props) {
  const { updateGameType, gamesData, show, resetGameType } = props;
  const { isGameActive = false } = gamesData;
  const { type = undefined, amount = undefined } = gamesData.gameType;
  const { handleBetPlacedSocket = undefined } = props;
  const [betAmount, setBetAmount] = useState(undefined);
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

  const handleInputModalClose = () => {
    console.log("handleInputModalClose:::");
    resetGameType();
  };

  return (
    <Modal show={show} className="betInputField">
      <div className="closeArrow">
        <img
          src="/assets/icons/white-close-icon.svg"
          role="button"
          onClick={handleInputModalClose}
          alt=""
        />
      </div>
      <div className="inputField">
        <label htmlFor="betDiv1" className="form-label">
          Enter Bet Amount:
        </label>
        <input
          disabled={!(type && isGameActive) ? true : false}
          type="number"
          placeholder="Enter bet amount"
          className={`form-control my-3 text-light ${
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
    </Modal>
  );
}

const mapDispatchToProps = {
  updateGameType,
  resetGameType,
};
const mapStateToProps = ({ gamesData }) => ({
  gamesData,
  isGameActive: gamesData.isGameActive,
});
export default connect(mapStateToProps, mapDispatchToProps)(BetInputField);
