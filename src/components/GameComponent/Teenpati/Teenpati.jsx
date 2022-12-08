import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateGameType,
  updatePlacedBet,
} from "../../../reducers/gameDataSlice";
import Timer from "../DragonTigerGame/Timer";
import "./teenpati.scss";
import {
  card_type_name,
  card_value_name,
  fetchTeenpatiBet,
} from "../../../utils/Utils";

function Teenpati(props) {
  const {
    isGameActive = true,
    updateGameType,
    gameType = {},
    past_win = [],
    teenpatiCards = {},
    updatePlacedBet,
    placedBet,
  } = props;
  const { type: _gameType = undefined, value: _gameValue = undefined } =
    gameType;
  const {
    cardA1 = [],
    cardA2 = [],
    cardA3 = [],
    cardB1 = [],
    cardB2 = [],
    cardB3 = [],
  } = teenpatiCards;

  const handleBlackClick = (player) => {
    const choosen_player = `select_${player}`;
    updateGameType({
      type: choosen_player,
      value: 1,
      amount: 0,
    });
    console.log("handleBlackClick::", choosen_player);
  };
  const handleLayClick = (player) => {
    const choosen_player = `select_${player}`;
    console.log("handleLayClick::", choosen_player);
    updateGameType({
      type: choosen_player,
      value: 0,
      amount: 0,
    });
  };
  const EachPlayer = (playerProps) => {
    return (
      <tr>
        <td>
          {playerProps.name}
          <br />
          {playerProps.nameVal}
        </td>
        <div className="d-flex position-relative eachPlayerBtnDiv">
          <div className={!isGameActive ? "lockImgDiv" : "d-none"}>
            <img src="/assets/icons/lock.svg" alt="lock" />
          </div>
          <td
            className={`w-50 ${
              _gameType === `select_${playerProps.player}` && _gameValue == "1"
                ? ""
                : "bg-info"
            }`}
            role={isGameActive ? "button" : ""}
            onClick={() => handleBlackClick(playerProps.player)}
          >
            {playerProps.blackVal1} <br />
            {playerProps.blackVal2}
          </td>
          <td
            className={`w-50 ${
              _gameType === `select_${playerProps.player}` && _gameValue == "0"
                ? ""
                : "bg-info"
            }`}
            role={isGameActive ? "button" : ""}
            onClick={() => handleLayClick(playerProps.player)}
          >
            {playerProps.layVal1}
            <br />
            {playerProps.layVal2}
          </td>
        </div>
      </tr>
    );
  };

  const fetchBet = async () => {
    const res = await fetchTeenpatiBet();

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
    <div className="teenpatiDiv">
      <div className="topSlideDiv position-relative">
        <div className="topBanner">
          <video width="320" height="240" autoPlay loop muted>
            <source src="/assets/video/teenpatti.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <img
          className="topBanner"
          src="/assets/images/teenpatiSlide.png"
          alt=""
        /> */}
        <div className="cards flex-column">
          <div className="d-flex mb-2">
            {cardA1.length === 0 ? (
              <img
                className="card"
                src="/assets/images/cards/playing-card-ba.png"
                alt="cards"
              />
            ) : (
              <img
                className="card"
                src={`/assets/cards/${card_type_name[cardA1[0]]}${
                  card_value_name[cardA1[1]]
                }.png`}
                alt="cards"
              />
            )}
            {cardA2.length === 0 ? (
              <img
                className="card"
                src="/assets/images/cards/playing-card-ba.png"
                alt="cards"
              />
            ) : (
              <img
                className="card"
                src={`/assets/cards/${card_type_name[cardA2[0]]}${
                  card_value_name[cardA2[1]]
                }.png`}
                alt="cards"
              />
            )}
            {cardA3.length === 0 ? (
              <img
                className="card"
                src="/assets/images/cards/playing-card-ba.png"
                alt="cards"
              />
            ) : (
              <img
                className="card"
                src={`/assets/cards/${card_type_name[cardA3[0]]}${
                  card_value_name[cardA3[1]]
                }.png`}
                alt="cards"
              />
            )}
            {/* <img
              className="card"
              src="/assets/images/cards/playing-card-ba.png"
              alt="cards"
            />
            <img
              className="card"
              src="/assets/images/cards/playing-card-ba.png"
              alt="cards"
            /> */}
          </div>
          <div className="d-flex">
            {cardB1.length === 0 ? (
              <img
                className="card"
                src="/assets/images/cards/playing-card-ba.png"
                alt="cards"
              />
            ) : (
              <img
                className="card"
                src={`/assets/cards/${card_type_name[cardB1[0]]}${
                  card_value_name[cardB1[1]]
                }.png`}
                alt="cards"
              />
            )}
            {cardB2.length === 0 ? (
              <img
                className="card"
                src="/assets/images/cards/playing-card-ba.png"
                alt="cards"
              />
            ) : (
              <img
                className="card"
                src={`/assets/cards/${card_type_name[cardB2[0]]}${
                  card_value_name[cardB2[1]]
                }.png`}
                alt="cards"
              />
            )}
            {cardB3.length === 0 ? (
              <img
                className="card"
                src="/assets/images/cards/playing-card-ba.png"
                alt="cards"
              />
            ) : (
              <img
                className="card"
                src={`/assets/cards/${card_type_name[cardB3[0]]}${
                  card_value_name[cardB3[1]]
                }.png`}
                alt="cards"
              />
            )}
          </div>
        </div>
        <Timer />
      </div>

      <div className="minMaxDiv">
        <table className="minMaxTable">
          <thead>
            <tr>
              <th>Min: 100 Max: 300000</th>
              <div className="d-flex ">
                <th colSpan={2} className="flex-grow-1 text-center">
                  Back
                </th>
                {/* <th className="flex-grow-1">Lay</th> */}
              </div>
            </tr>
          </thead>
          <tbody>
            <EachPlayer
              name="Player A"
              nameVal="0"
              blackVal1="1.98"
              blackVal2="0"
              layVal1="Pair Plus A"
              layVal2="0"
              player="A"
            />
            <EachPlayer
              name="Player B"
              nameVal="0"
              blackVal1="1.98"
              blackVal2="0"
              layVal1="Pair Plus B"
              layVal2="0"
              player="B"
            />
          </tbody>
        </table>
      </div>

      <div className="resultDiv row">
        <div className="header">
          <span>Last Result</span>
        </div>
        <div className="content">
          {past_win.map(
            (data, index) =>
              data &&
              !Number.isInteger(data) && (
                <span
                  key={`result-${index}`}
                  className={data.toUpperCase() === "B" && "text-danger"}
                >
                  {data.charAt(0).toUpperCase()}
                </span>
              )
          )}
        </div>
      </div>

      {/* <div className="pairResult">
        <div className="header">Last Result</div>
        <div className="subheader">Pair Plus</div>
        <table className="pairTable">
          <tbody>
            <tr>
              <td>Pair (Double)</td>
              <td>1 To 1</td>
            </tr>
            <tr>
              <td>Flush (Colour)</td>
              <td>1 To 4</td>
            </tr>
            <tr>
              <td>Straight (Rown)</td>
              <td>1 To 6</td>
            </tr>
            <tr>
              <td>Trio (Teen)</td>
              <td>1 To 35</td>
            </tr>
            <tr>
              <td>Straight Flush ( Pakki Rown)</td>
              <td>1 To 45</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  isGameActive: gamesData.isGameActive,
  past_win: gamesData.past_win,
  gameType: gamesData.gameType,
  placedBet: gamesData.placedBet,
  teenpatiCards: gamesData.teenpatiCards,
});

const mapDispatchToProps = {
  updateGameType,
  updatePlacedBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Teenpati);
