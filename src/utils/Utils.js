// import Bowser from "bowser";

import axios from "axios";

// export const isMobileView = () => {
//   if (typeof window !== "undefined") {
//     const deviceType = Bowser.getParser(
//       window.navigator.userAgent
//     ).getPlatformType();
//     if (deviceType === "mobile") {
//       return true;
//     }
//   }
//   return false;
// };
const logout = () => {
  localStorage.clear();
  window.location.reload();
  return;
};
export const card_type = {
  dragon: -1,
  tiger: 1,
  tie: 0,
  pair: 2,
};

const card_value_type = {
  "-1": "dragon",
  1: "tiger",
  0: "tie",
  2: "pair",
};

const card_lh_value_type = {
  0: "low",
  1: "high",
};

export const fetchExpToken = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/api/user/token`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { status } = res;
    if (status === 200) {
      res.data.token = parseInt(res.data.token);
      res.data.exposure_token = parseInt(res.data.exposure_token);
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token::", err.response.data);
  }
};

export const fetchPlacedBet = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/dragon_tiger_place_bid`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { data, status } = res;
    if (status === 200) {
      res.data = data
        .map((d, i) => {
          let gamePLayed = null,
            gameAmount = null,
            gameWinStatus = null;
          if (d.card_type !== "False") {
            gamePLayed = card_value_type[d.card_type];
            gameAmount = d.card_type_amount.toString();
            gameWinStatus = d.card_type_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_OE !== "False") {
            gamePLayed = d.card_Dragon_OE == 0 ? "Dragon Even" : "Dragon Odd";
            gameAmount = d.card_Dragon_OE_amount.toString();
            gameWinStatus = d.card_Dragon_OE_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_OE !== "False") {
            gamePLayed = d.card_Tiger_OE == 0 ? "Tiger Even" : "Tiger Odd";
            gameAmount = d.card_Tiger_OE_amount.toString();
            gameWinStatus = d.card_Tiger_OE_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_color !== "False") {
            gamePLayed =
              d.card_Dragon_color == 0 ? "Dragon Red" : "Dragon Black";
            gameAmount = d.card_Dragon_color_amount.toString();
            gameWinStatus = d.card_Dragon_color_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_color !== "False") {
            gamePLayed =
              d.card_Tiger_color == 0 ? "Dragon Red" : "Dragon Black";
            gameAmount = d.card_Tiger_color_amount.toString();
            gameWinStatus = d.card_Tiger_color_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_number !== "False") {
            gamePLayed = `Dragon Card ${card_value_name[d.card_Dragon_number]}`;
            gameAmount = d.card_Dragon_number_amount.toString();
            gameWinStatus = d.card_Dragon_number_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_number !== "False") {
            gamePLayed = `Tiger Card ${card_value_name[d.card_Tiger_number]}`;
            gameAmount = d.card_Tiger_number_amount.toString();
            gameWinStatus = d.card_Tiger_number_is_win ? "Won" : "Loss";
          }
          return {
            gamePLayed,
            gameAmount,
            gameWinStatus,
            date: d.date,
            id: i,
          };
        })
        .filter((d) => {
          return d.gamePLayed;
        });
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token1::", err.response);
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.reload();
      return;
    }
  }
};

export const fetchLuck7Bet = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/luck77_model_place_bid`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { data, status } = res;
    if (status === 200) {
      res.data = data
        .map((d, i) => {
          let gamePLayed = null,
            gameAmount = null,
            gameWinStatus = null;
          if (d.card_lh !== "False") {
            gamePLayed = card_lh_value_type[d.card_lh];
            gameAmount = d.card_lh_amount.toString();
            gameWinStatus = d.card_lh_win ? "Won" : "Loss";
          } else if (d.card_oe !== "False") {
            gamePLayed = d.card_oe == 0 ? "Luck7 Even" : "Luck7 Odd";
            gameAmount = d.card_oe_amount.toString();
            gameWinStatus = d.card_oe_win ? "Won" : "Loss";
          } else if (d.card_colour !== "False") {
            gamePLayed = d.card_colour == 0 ? "Luck7 Red" : "Luck7 Black";
            gameAmount = d.card_colour_amount.toString();
            gameWinStatus = d.card_colour_win ? "Won" : "Loss";
          } else if (d.card_number !== "False") {
            gamePLayed = `Luck7 ${card_value_name[d.card_number]}`;
            gameAmount = d.card_number_amount.toString();
            gameWinStatus = d.card_number_win ? "Won" : "Loss";
          }
          return {
            gamePLayed,
            gameAmount,
            gameWinStatus,
            date: d.date,
            id: i,
          };
        })
        .filter((d) => {
          return d.gamePLayed;
        });
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token1 in luck7::", err.response);
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.reload();
      return;
    }
  }
};

export const fetchCard32Bet = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/Card32_place_bid`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { data, status } = res;
    if (status === 200) {
      res.data = data
        .map((d, i) => {
          let gamePLayed = null,
            gameAmount = null,
            gameWinStatus = null;
          if (d.select_8 !== "False") {
            gamePLayed = d.select_8 == "0" ? "Player 8 Lay" : "Player 8 Back";
            gameAmount = d.select_8_amount.toString();
            gameWinStatus = d.select_8_win ? "Won" : "Loss";
          } else if (d.select_9 !== "False") {
            gamePLayed = d.select_9 == "0" ? "Player 9 Lay" : "Player 9 Back";
            gameAmount = d.select_9_amount.toString();
            gameWinStatus = d.select_9_win ? "Won" : "Loss";
          } else if (d.select_10 !== "False") {
            gamePLayed =
              d.select_10 == "0" ? "Player 10 Lay" : "Player 10 Back";
            gameAmount = d.select_10_amount.toString();
            gameWinStatus = d.select_10_win ? "Won" : "Loss";
          } else if (d.select_11 !== "False") {
            gamePLayed =
              d.select_11 == "0" ? "Player 11 Lay" : "Player 11 Back";
            gameAmount = d.select_11_amount.toString();
            gameWinStatus = d.select_11_win ? "Won" : "Loss";
          }
          return {
            gamePLayed,
            gameAmount,
            gameWinStatus,
            date: d.date,
            id: i,
          };
        })
        .filter((d) => {
          return d.gamePLayed;
        });
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token1 in card32::", err.response);
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.reload();
      return;
    }
  }
};

export const fetchTeenpatiBet = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/teenpatti_place_bid`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { data, status } = res;
    if (status === 200) {
      res.data = data
        .map((d, i) => {
          let gamePLayed = null,
            gameAmount = null,
            gameWinStatus = null;
          if (d.select_A !== "False") {
            gamePLayed = d.select_A == "0" ? "Player A Lay" : "Player A Back";
            gameAmount = d.select_A_amount.toString();
            gameWinStatus = d.select_A_win ? "Won" : "Loss";
          } else if (d.select_B !== "False") {
            gamePLayed = d.select_B == "0" ? "Player A Lay" : "Player A Back";
            gameAmount = d.select_B_amount.toString();
            gameWinStatus = d.select_B_win ? "Won" : "Loss";
          }
          return {
            gamePLayed,
            gameAmount,
            gameWinStatus,
            date: d.date,
            id: i,
          };
        })
        .filter((d) => {
          return d.gamePLayed;
        });
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token1 in teenpati::", err.response);
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.reload();
      return;
    }
  }
};

export const fetchButtonValue = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/button_value`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
    logout();
  } catch (error) {
    console.log("Error while fetching Button Value::");
    logout();
  }
};

export const updateButtonValueApi = async (formData) => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/button_value/`;
    const res = await axios({
      method: "post",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
    // logout();
  } catch (error) {
    console.log("Error while updating Button Value::", error);
    // logout();
  }
};

export const card_type_name = {
  0: "spades/p",
  1: "diamonds/l",
  2: "clubs/k",
  3: "hearts/s",
};

export const card_value_name = {
  0: "2",
  1: "3",
  2: "4",
  3: "5",
  4: "6",
  5: "7",
  6: "8",
  7: "9",
  8: "10",
  9: "j",
  10: "q",
  11: "k",
  12: "a",
};

export const card_value_name_A_top = {
  0: "a",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
  8: "9",
  9: "10",
  10: "j",
  11: "q",
  12: "k",
};

// Lucky 77 games config
export const gamesWsApi = {
  dragon: "/bid/DragonTiger",
  lucky7: "/bid/luck77",
  card32: "/bid/Card32/",
  teenpati: "/bid/TeenPatti/",
  andarBahar: "",
  queen: "",
  poker: "",
  race20: "",
};

export const card_lh_type = {
  low: 0,
  high: 1,
};

export const cards_number_list = [
  { value: 0, name: "2" },
  { value: 1, name: "3" },
  { value: 2, name: "4" },
  { value: 3, name: "5" },
  { value: 4, name: "6" },
  { value: 5, name: "7" },
  { value: 6, name: "8" },
  { value: 7, name: "9" },
  { value: 8, name: "10" },
  { value: 9, name: "J" },
  { value: 10, name: "Q" },
  { value: 11, name: "K" },
  { value: 12, name: "A" },
];

export const OEVal = { odd: 1, even: 0 };

export const color_obj = { black: 1, red: 0 };
