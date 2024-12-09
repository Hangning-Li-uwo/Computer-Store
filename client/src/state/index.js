// state.js
import { createSlice } from "@reduxjs/toolkit";

// // In your component where the action is dispatched (e.g., Dashboard.js)
// import App from "../App"
// import React from "react";
// import ReactDOM from "react-dom";
// import { useAuth } from "../context/AuthContext";

// {/* <AuthProvider>
//   <App />
// </AuthProvider> */}

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
    setMode: (state, action) => {
      state.mode = action.payload.themeMode;
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
    setOrderItem: (state, action) => {
      state.user.ordersRef = Array.from(state.user?.ordersRef || []);
      state.user?.ordersRef.push(action.payload);
      console.log("77777############## state.user?.ordersRef:",state.user?.ordersRef); 
      // Clear cart items
      state.items = [];

    //   // Update currentUser in AuthContext to reflect changes
    // if (currentUser) {
    //   const updatedUser = { ...currentUser, ordersRef: [...currentUser.ordersRef, newOrder] };
    //   setCurrentUser(updatedUser); // Sync with context
    //   localStorage.setItem("currentUser", JSON.stringify(updatedUser)); // Optionally save to localStorage
    // }


    },
    deleteOrderItem: (state, action) => {
      if(state.user.ordersRef){
        state.user.ordersRef = state.user.ordersRef.filter(
          (_, index) => index !== action.payload
        );
      }
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
