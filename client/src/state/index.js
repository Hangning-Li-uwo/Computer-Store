// state.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  items: [] // Cart items array
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setCartItem: (state, action) => {
      // Add the new item to the items array
      state.items.push(action.payload);
    },
    removeCartItem: (state, action) => {
      // Remove the item at the specified index
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    clearCartItem: (state, action) => {
      // Remove the item at the specified index
      state.items = [];
    },
  },
});

export const { setMode, setCartItem, removeCartItem, clearCartItem} = authSlice.actions;
export default authSlice.reducer;