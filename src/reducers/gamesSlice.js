import { createSlice } from "@reduxjs/toolkit";
const initValue = {
  data: [],
  active_games: [],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState: initValue,
  reducers: {
    updateGames(state, action) {
      const { payload } = action;
      const { active_games, data } = payload;
      return { ...state, data, active_games };
    },
  },
});

export const { updateGames } = gamesSlice.actions;

export default gamesSlice.reducer;
