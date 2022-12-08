import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./games.scss";
import { updateGames } from "./../../../reducers/gamesSlice";
import { useState } from "react";

function Games(props) {
  const navigate = useNavigate();
  const [_games, setGames] = useState(props.games);
  const fetchGameData = async () => {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/data/gameData/`;
    const res = await axios({
      method: "get",
      url: apiURL,
    });
    const { status, data, active_games } = res.data;
    if (status === 1) {
      setGames(data);
      props.updateGames({ data, active_games });
      return;
    }
  };
  useEffect(() => {
    if (!props.games.length) {
      fetchGameData();
    }
  }, []);
  return (
    <div className="gameMainDiv">
      <h1>Games</h1>
      <div className="row gameContainer">
        {_games.map((data, index) => {
          return (
            <div
              key={`index-${index}`}
              className="col-6 col-lg-3 col-md-4 gameCard position-relative"
              // className="col-lg-3 col-md-4 col-sm-6 col-xs-6 gameCard position-relative"
              role="button"
              onClick={() => {
                data.active && navigate(`/game/${data.game_link}`);
              }}
            >
              {/* <img src="/assets/tempImages/games/games.png" alt="" /> */}
              <div
                className="gameImage"
                style={{ width: "100%", height: "100%" }}
              >
                <img src={data.url} alt="" />
                <span className="gameTitle">{data.game_name}</span>
                {!data.active && (
                  <div className="lock">
                    <img src="/assets/icons/lock.svg" alt="" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ games }) => ({
  games: games.data,
  active_games: games.active_games,
});

const mapDispatchToProps = {
  updateGames,
};
export default connect(mapStateToProps, mapDispatchToProps)(Games);
