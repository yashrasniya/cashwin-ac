import { createSlice } from "@reduxjs/toolkit";
const initValue = {
  buttonValues: [],
};
export const menuSlice = createSlice({
  name: "menuData",
  initialState: initValue,
  reducers: {
    getButtonValues(state, action) {
      const { payload } = action;
      const { data = [] } = payload;
      state.buttonValues = data;
    },
    updateButtonValues(state, action) {
      const { payload } = action;
      const { data = {} } = payload;
      state.buttonValues.push(data);
    },
  },
});

export const { getButtonValues, updateButtonValues } = menuSlice.actions;
export default menuSlice.reducer;
