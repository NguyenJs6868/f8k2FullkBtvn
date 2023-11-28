import { configureStore } from "@reduxjs/toolkit";
import { trelloSlice } from "./slices/trelloSlice";

export const store = configureStore({
  reducer: {
    todo: trelloSlice.reducer,
  },
});
