// state.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  orders: [],
  items: [], // Cart items array
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUserProfile: (state, action) => {
      state.user.UID = action.payload.UID;
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.role = action.payload.role;
      state.user.email = action.payload.email;
      state.user.photoURL = action.payload.photoURL;
      state.user.address = action.payload.address;
      state.user.paymentMethod = action.payload.paymentMethod;
    },
    updateRole: (state, action) => {
      if (state.user) {
        state.user.role = action.payload.role; // Update the role in the Redux store
      }
    },
    logOut: (state, action) => {
      state.user = null;
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user.address = action.payload.address;
        state.user.paymentMethod = action.payload.paymentMethod;
      }
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
    setOrderItem: (state, action) => {},
    deleteOrderItem: (state, action) => {},
  },
});

export const {
  setMode,
  setUserProfile,
  updateProfile,
  updateRole,
  logOut,
  setCartItem,
  removeCartItem,
  clearCartItem,
  setOrderItem,
  deleteOrderItem,
} = authSlice.actions;
export default authSlice.reducer;
