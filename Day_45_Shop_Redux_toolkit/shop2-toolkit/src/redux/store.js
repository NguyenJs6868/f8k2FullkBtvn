import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { cartSlice } from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    cart: cartSlice.reducer,
  },
});
