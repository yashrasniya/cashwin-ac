import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateGameType,
  updatePlacedBet,
} from "../../../reducers/gameDataSlice";
import {
  cards_number_list,
  card_lh_type,
  card_type_name,
  card_value_name_A_top,
  color_obj,
  fetchLuck7Bet,
  OEVal,
} from "../../../utils/Utils";
import Timer from "../DragonTigerGame/Timer";
import "./lucky7.scss";
function Lucky7Game(props) {
  const {
    isGameActive = false,
    updateGameType,
    resultCard = [],
    past_win = [],
    updatePlacedBet,
    placedBet,
  } = props;
  const { type: _gameType = undefined, value: _gameValue = undefined } =
    props.gameType;
  const handleCardNumber = (data, gameName) => {
    console.log("handleCardNumber:::");
    updateGameType({
      type: gameName,
      value: data.value,
      amount: 0,
    });
  };
  const handleOEGame = (gameName, OEType) => {
    console.log("handleOEGame:::");
    updateGameType({
      type: gameName,
      value: OEVal[OEType],
      amount: 0,
    });
  };
  const EachCards = ({ detail, gameName, isCardActive }) => {
    return (
      <div
        role={isGameActive ? "button" : ""}
        onClick={() => isGameActive && handleCardNumber(detail, gameName)}
        className="cardSet"
      >
        <div
          className={`eachCard ${
            isCardActive && _gameValue === detail.value && "bg-info"
          }`}
        >
          <span>{detail.name}</span>
          <img
            className="cardImg"
            src="/assets/images/cards/cards-1.png"
            alt="card"
          />
          <div className={`lockDiv ${isGameActive && "d-none"}`}>
            <img src="/assets/icons/lock.svg" alt="lock" />
          </div>
        </div>
        <div className="text-center">0</div>
      </div>
    );
  };
  const GameButtons = (btnProps) => {
    return (
      <div className={btnProps.colClass}>
        <div className="text-center text">{btnProps.topCount}</div>
        <div className="position-relative">
          <button
            onClick={btnProps.onClick}
            className={`btn btn-primary ${btnProps.btnColor}`}
          >
            {btnProps.btnText}
          </button>
          <div className={!isGameActive ? "lockImgDiv" : "d-none"}>
            <img src="/assets/icons/lock.svg" alt="lock" />
          </div>
        </div>
        <div className="text-center text">{btnProps.bottomCount}</div>
      </div>
    );
  };

  const handle_high_low_game = (gameType) => {
    console.log("handle_high_low_game:::", gameType);
    updateGameType({
      type: "card_lh",
      value: card_lh_type[gameType],
      amount: 0,
    });
  };
  const handleCardColorGame = (gameName, color) => {
    console.log("inside handleCardColorGame:::");
    updateGameType({
      type: gameName,
      value: color_obj[color],
      amount: 0,
    });
  };

  const fetchBet = async () => {
    const res = await fetchLuck7Bet();

    const { status, data } = res;
    if (status === 200) {
      updatePlacedBet({ data });
      return;
    }
    return;
  };

  useEffect(() => {
    if (!placedBet.count) {
      fetchBet();
    }
  }, []);
  return (
    <div className="lucky7GameDiv">
      <div className="topSlideDiv position-relative">
        <div className="topBanner">
          <video width="320" height="240" autoPlay loop muted>
            <source src="/assets/video/lucky7.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <img className="topBanner" src="/assets/images/lucky7Game.png" alt="" /> */}
        <div className="cards">
          {resultCard.length === 0 ? (
            <img
              className="card"
              src="/assets/images/cards/playing-card-ba.png"
              alt="cards"
            />
          ) : (
            <img
              className="card"
              src={`/assets/cards/${card_type_name[resultCard[0]]}${
                card_value_name_A_top[resultCard[1]]
              }.png`}
              alt="cards"
            />
          )}
        </div>
        <Timer />
      </div>

      <div className="row highLowCardDiv">
        <div className="col">
          <div className="row highLowBtn">
            <GameButtons
              colClass="gameBtn col-lg-5 col-md-5 col-sm-5"
              btnText="Low Card"
              topCount="2.00"
              bottomCount="0"
              onClick={() => handle_high_low_game("low")}
              btnColor={
                _gameType === "card_lh" && _gameValue === 0 ? "bg-info" : ""
              }
            />
            <div className="col-lg-2 col-md-2 col-sm-2 d-flex justify-content-center align-items-center highLowCard">
              <div className="gameCard">
                <span>7</span>
                <img
                  className="cardImg"
                  src="/assets/images/cards/cards-1.png"
                  alt="card"
                />
              </div>
            </div>
            <GameButtons
              colClass="gameBtn col-lg-5 col-md-5 col-sm-5"
              btnText="High Card"
              topCount="2.00"
              bottomCount="0"
              onClick={() => handle_high_low_game("high")}
              btnColor={
                _gameType === "card_lh" && _gameValue === 1 ? "bg-info" : ""
              }
            />
          </div>
          <div className="text-end">Min:100 Max:300000</div>
        </div>
      </div>

      <div className="row oddEvenDiv">
        <div className="col me-2 oddEven">
          <div className="row">
            <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Even"
              topCount="2.10"
              bottomCount="0"
              onClick={() => handleOEGame("card_oe", "even")}
              btnColor={
                _gameType === "card_oe" && _gameValue === 0 && "bg-info"
              }
            />
            <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Odd"
              topCount="1.79"
              bottomCount="0"
              onClick={() => handleOEGame("card_oe", "odd")}
              btnColor={
                _gameType === "card_oe" && _gameValue === 1 && "bg-info"
              }
            />
            <div className="text-end">Min:100 Max:25000</div>
          </div>
        </div>
        <div className="col ms-2 oddEven">
          <div className="row">
            <div className="gameBtn col-lg-6 cardIconBtn">
              <div className="text-center text">1.95</div>
              <div className="position-relative">
                <button
                  role={isGameActive ? "button" : ""}
                  onClick={() => handleCardColorGame("card_colour", "red")}
                  className={`btn ${
                    _gameType === "card_colour" && _gameValue === 0 && "bg-info"
                  }`}
                >
                  <img src="/assets/icons/btnCard1.svg" alt="btnCard" />
                </button>
                <div className={!isGameActive ? "lockImgDiv" : "d-none"}>
                  <img src="/assets/icons/lock.svg" alt="lock" />
                </div>
              </div>
              <div className="text-center text">0</div>
            </div>
            <div className="gameBtn col-lg-6 cardIconBtn">
              <div className="text-center text">1.95</div>
              <div className="position-relative">
                <button
                  role={isGameActive ? "button" : ""}
                  onClick={() => handleCardColorGame("card_colour", "black")}
                  className={`btn ${
                    _gameType === "card_colour" && _gameValue === 1 && "bg-info"
                  }`}
                >
                  <img src="/assets/icons/btnCard2.svg" alt="btnCard" />
                </button>
                <div className={!isGameActive ? "lockImgDiv" : "d-none"}>
                  <img src="/assets/icons/lock.svg" alt="lock" />
                </div>
              </div>
              <div className="text-center text">0</div>
            </div>
            <div className="text-end">Min:100 Max:25000</div>
          </div>
        </div>
      </div>

      <div className="row displayCardsDiv">
        <div className="col">
          <div className="text-center">12.00</div>
          <div className="d-flex flex-wrap justify-content-center">
            {cards_number_list.map((card) => (
              <EachCards
                detail={card}
                gameName="card_number"
                isCardActive={_gameType === "card_number"}
              />
            ))}
          </div>
          <div className="text-center">Min:100 Max:25000</div>
        </div>
      </div>

      <div className="lastResultDiv row">
        <div className="header">
          <span>Last Result</span>
        </div>
        <div className="content">
          {past_win.map(
            (data, index) =>
              data &&
              !Number.isInteger(data) && (
                <span key={`result-${index}`}>
                  {data.charAt(0).toUpperCase()}
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  isGameActive: gamesData.isGameActive,
  gameType: gamesData.gameType,
  resultCard: gamesData.resultCard,
  past_win: gamesData.past_win,
  placedBet: gamesData.placedBet,
});
const mapDispatchToProps = {
  updateGameType,
  updatePlacedBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lucky7Game);
