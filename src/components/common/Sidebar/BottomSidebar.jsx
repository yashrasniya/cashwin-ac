import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateGames } from "./../../../reducers/gamesSlice";

function BottomSidebar(props) {
  const { active_games, games } = props;
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const fetchGameData = async () => {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/data/gameData/`;
    const res = await axios({
      method: "get",
      url: apiURL,
    });
    const { status, data, active_games } = res.data;
    if (status === 1) {
      props.updateGames({ data, active_games });
      return;
    }
  };
  useEffect(() => {
    if (!props.games.length) {
      fetchGameData();
    }
  }, []);
  const { toggleSideBar = () => {} } = props;
  const gameLink = [
    {
      label: "20-20 Dragon Tiger",
      link: "/game/dragon",
    },
    {
      label: "Luck7 - B",
      link: "/game/lucky7",
    },
    {
      label: "20-20 Teenpatti",
      link: "/game/teenpati",
    },

    {
      label: "32 Cards",
      link: "/game/card32",
    },
    {
      label: "Andar Bahar",
      link: "/game/andarBahar",
    },
    {
      label: "Casino queen",
      link: "/game/queen",
    },

    {
      label: "20-20 Poker",
      link: "/game/poker",
    },
    {
      label: "Race 20-20",
      link: "/game/race20",
    },
  ];
  return (
    <div className="bottomDiv">
      <div className="header mb-3">Games</div>

      <div className="sideBarLinks">
        {/* {gameLink.map(({ link, label }, index) => (
          <NavLink
            onClick={toggleSideBar}
            key={index}
            className="navLink"
            to={link}
          >
            {label}
          </NavLink>
        ))} */}

        {games.map((data, index) => (
          <NavLink
            onClick={toggleSideBar}
            key={index}
            className={`navLink ${!data.active && "disabled-link"}`}
            to={!data.active ? "#" : `/game/${data.game_link}`}
          >
            {data.game_name}
          </NavLink>
        ))}
        <div className="LogoutBtn">
          <button className="btn btn-primary bg-primary" onClick={handleLogout}>
            <img
              src="/assets/icons/logout.svg"
              alt="logout-icon"
              className="logoutIcon"
            />{" "}
            Logout
          </button>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(BottomSidebar);
