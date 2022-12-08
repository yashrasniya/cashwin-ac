import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";
import gamesDataSlice from "./gameDataSlice";
import gamesSlice from "./gamesSlice";
import localStorageSlice from "./localstorageSlice";
import menuData from "./menuSlice";
export const store = configureStore({
  reducer: {
    localstorage: localStorageSlice,
    gamesData: gamesDataSlice,
    games: gamesSlice,
    common: commonSlice,
    menuData: menuData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
