import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  isGameActive: false,
  gameName: undefined,
  sessionId: undefined,
  isTimerActive: false,
  past_win: [],
  dragonArr: [],
  tigerArr: [],
  resultCard: [],
  placedBet: { count: 0, data: [] },
  gameType: { type: undefined, value: undefined, amount: undefined },
  card32Cards: { card8: [], card9: [], card10: [], card11: [] },
  teenpatiCards: {
    cardA1: [],
    cardA2: [],
    cardA3: [],
    cardB1: [],
    cardB2: [],
    cardB3: [],
  },
};

export const gamesDataSlice = createSlice({
  name: "gamesData",
  initialState: initValue,
  reducers: {
    updateGameStatus(state, action) {
      const { payload } = action;
      console.log("inside updateGameStatus", payload);
      if (state.isGameActive !== payload.isGameActive) {
        state.isGameActive = payload.isGameActive;
        if (payload.isGameActive === false) {
          state.gameType = { type: undefined, value: undefined, amount: 0 };
        }
      }
      return state;
    },
    updateGameType(state, action) {
      const { payload } = action;
      state.gameType = { ...state.gameType, ...payload };
    },
    resetGameType(state) {
      return {
        ...state,
        gameType: { type: undefined, value: undefined, amount: 0 },
      };
    },
    updateSessionId(state, action) {
      const { payload } = action;
      const { sessionId = undefined } = payload;
      state.sessionId = sessionId;
    },
    resetAll() {
      return initValue;
    },
    startTimer(state) {
      state.isTimerActive = true;
    },
    stopTimer(state) {
      state.isTimerActive = false;
    },
    updateDragon(state, action) {
      const { payload } = action;
      const { dragonArr = [] } = payload;

      state.dragonArr = dragonArr;
    },
    updateTiger(state, action) {
      const { payload } = action;
      const { tigerArr = [] } = payload;
      state.tigerArr = tigerArr;
    },
    updateResultCard(state, action) {
      const { payload } = action;
      const { card = [] } = payload;
      state.resultCard = card;
    },
    updatePastWin(state, action) {
      const { payload } = action;
      const { past_win = [] } = payload;
      state.past_win = past_win;
    },
    updatePlacedBet(state, action) {
      const { payload } = action;
      const { data = [] } = payload;
      state.placedBet.count = data.length;
      state.placedBet.data = data;
    },
    updateCard32Cards(state, action) {
      const { payload } = action;
      // const { data = {} } = payload;
      const newObj = { ...state.card32Cards, ...payload };
      state.card32Cards = newObj;
    },
    updateTeenPatiCards(state, action) {
      const { payload } = action;
      // const { data = {} } = payload;
      const newObj = { ...state.teenpatiCards, ...payload };
      state.teenpatiCards = newObj;
    },
  },
});

export const {
  updateGameStatus,
  resetAll,
  updateGameType,
  resetGameType,
  updateSessionId,
  startTimer,
  stopTimer,
  updateDragon,
  updateTiger,
  updatePastWin,
  updatePlacedBet,
  updateResultCard,
  updateCard32Cards,
  updateTeenPatiCards,
} = gamesDataSlice.actions;
export default gamesDataSlice.reducer;
