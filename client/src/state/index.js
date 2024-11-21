// state.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  orders: [],
  localStock: [],
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
      state.user = action.payload.profile;
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
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

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
      // state.items = [];
    },
    setOrderItem: (state, action) => {
      const newOrder = {
        id: state.nextOrderId || 1,
        items: action.payload, // Pass an array of items directly
        date: new Date().toISOString(),
        address: state.user.address,
        paymentMethod: state.user.paymentMethod
      };
    
      state.nextOrderId = (state.nextOrderId || 1) + 1;
    
      state.orders.push(newOrder);
    
      // Clear cart items
      state.items = [];
    },
    deleteOrderItem: (state, action) => {
      state.orders = state.orders.filter(
        (_, index) => index !== action.payload
      );
    },
    setLocalStock: (state, action) => {
      state.localStock = action.payload.map(item => ({
        name: item.name,
        quantity: item.quantity,
      }));
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
  setLocalStock
} = authSlice.actions;
export default authSlice.reducer;
