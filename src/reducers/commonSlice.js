import { createSlice } from "@reduxjs/toolkit";
const initValue = {
  openSideBar: false,
};
export const commonSlice = createSlice({
  name: "common",
  initialState: initValue,
  reducers: {
    toggleHamburger(state) {
      state.openSideBar = !state.openSideBar;
    },
    closeSideBar(state) {
      state.openSideBar = false;
    },
  },
});

export const { toggleHamburger, closeSideBar } = commonSlice.actions;
export default commonSlice.reducer;
