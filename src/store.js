import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    cabinet: apiSlice,
  },
});

export default store;
