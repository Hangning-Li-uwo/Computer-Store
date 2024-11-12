import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  
  items: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setCartItem: (state, action) => {
        // TODO
    },
    removeCartItem: (state, action) => {
        // TODO
    },
  },
});

export const { setMode, setCartItem, removeCartItem, } =
  authSlice.actions;
export default authSlice.reducer;
