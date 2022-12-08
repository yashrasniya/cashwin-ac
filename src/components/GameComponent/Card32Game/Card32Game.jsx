import React, { memo } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateGameType,
  updatePlacedBet,
} from "../../../reducers/gameDataSlice";
import {
  card_type_name,
  card_value_name_A_top,
  fetchCard32Bet,
} from "../../../utils/Utils";
import Timer from "../DragonTigerGame/Timer";
import "./card32Game.scss";

function Card32Game(props) {
  const {
    isGameActive = true,
    updateGameType,
    past_win = [],
    gameType = {},
    card32Cards = {},
    placedBet,
    updatePlacedBet,
  } = props;
  const { card8 = [], card9 = [], card10 = [], card11 = [] } = card32Cards;
  const { type: _gameType = undefined, value: _gameValue = undefined } =
    gameType;
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
            className={`flex-grow-1 ${
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
            className={`flex-grow-1 ${
              _gameType === `select_${playerProps.player}` && _gameValue == "0"
                ? ""
                : "bg-pink"
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
    const res = await fetchCard32Bet();

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
    <div className="card32GameDiv">
      <div className="topSlideDiv position-relative">
        <div className="topBanner">
          <video width="320" height="240" autoPlay loop muted>
            <source src="/assets/video/card32.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <img className="topBanner" src="/assets/images/card32Game.png" alt="" /> */}
        <div className="cards flex-column">
          <div className="d-flex mb-2">
            <div className="position-relative cardWithNo me-3">
              {/* <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              /> */}
              {card8.length === 0 ? (
                <img
                  className="card"
                  src="/assets/images/cards/playing-card-ba.png"
                  alt="cards"
                />
              ) : (
                <img
                  className="card"
                  src={`/assets/cards/${card_type_name[card8[0]]}${
                    card_value_name_A_top[card8[1]]
                  }.png`}
                  alt="cards"
                />
              )}
            </div>
            <div className="position-relative cardWithNo">
              {/* <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              /> */}
              {card9.length === 0 ? (
                <img
                  className="card"
                  src="/assets/images/cards/playing-card-ba.png"
                  alt="cards"
                />
              ) : (
                <img
                  className="card"
                  src={`/assets/cards/${card_type_name[card9[0]]}${
                    card_value_name_A_top[card9[1]]
                  }.png`}
                  alt="cards"
                />
              )}
            </div>
          </div>
          <div className="d-flex">
            <div className="position-relative cardWithNo me-3">
              {/* <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              /> */}
              {card10.length === 0 ? (
                <img
                  className="card"
                  src="/assets/images/cards/playing-card-ba.png"
                  alt="cards"
                />
              ) : (
                <img
                  className="card"
                  src={`/assets/cards/${card_type_name[card10[0]]}${
                    card_value_name_A_top[card10[1]]
                  }.png`}
                  alt="cards"
                />
              )}
            </div>
            <div className="position-relative cardWithNo">
              {/* <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              /> */}
              {card11.length === 0 ? (
                <img
                  className="card"
                  src="/assets/images/cards/playing-card-ba.png"
                  alt="cards"
                />
              ) : (
                <img
                  className="card"
                  src={`/assets/cards/${card_type_name[card11[0]]}${
                    card_value_name_A_top[card11[1]]
                  }.png`}
                  alt="cards"
                />
              )}
            </div>
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
                <th className="flex-grow-1">Back</th>
                <th className="flex-grow-1">Lay</th>
              </div>
            </tr>
          </thead>
          <tbody>
            <EachPlayer
              name="Player 8"
              nameVal="0"
              blackVal1="12.20"
              blackVal2="10000000"
              layVal1="13.70"
              layVal2="10000000"
              player="8"
            />
            <EachPlayer
              name="Player 9"
              nameVal="0"
              blackVal1="5.95"
              blackVal2="10000000"
              layVal1="6.45"
              layVal2="10000000"
              player="9"
            />
            <EachPlayer
              name="Player 10"
              nameVal="0"
              blackVal1="3.20"
              blackVal2="10000000"
              layVal1="3.45"
              layVal2="10000000"
              player="10"
            />
            <EachPlayer
              name="Player 11"
              nameVal="0"
              blackVal1="2.08"
              blackVal2="10000000"
              layVal1="2.18"
              layVal2="10000000"
              player="11"
            />
          </tbody>
        </table>
      </div>

      <div className="lastResultDiv row">
        <div className="header">
          <span>Last Result</span>
        </div>
        <div className="content">
          {past_win.map((data, index) =>
            data ? (
              <span
                className={data === 11 ? "text-danger" : ""}
                key={`result-${index}`}
              >
                {data}
              </span>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  isGameActive: gamesData.isGameActive,
  past_win: gamesData.past_win,
  gameType: gamesData.gameType,
  card32Cards: gamesData.card32Cards,
  placedBet: gamesData.placedBet,
});
const mapDispatchToProps = {
  updateGameType,
  updatePlacedBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Card32Game));
