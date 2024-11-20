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
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
    
      if (existingItem) {
        // Increment the quantity if the item exists
        existingItem.quantity += 1;
      } else {
        // Add the item to the cart with an initial quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
      // Remove the item at the specified index
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    clearCartItem: (state, action) => {
      // Remove the item at the specified index
      state.items = [];
    },
    setOrderItem: (state, action) => {
      const newOrder = { ...action.payload, id: state.nextOrderId };
      state.orders.push(newOrder);
      state.nextOrderId += 1; // Increment the ID for the next order
    },
    deleteOrderItem: (state, action) => {
      state.orders = state.orders.filter((_, index) => index !== action.payload);
    },
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
