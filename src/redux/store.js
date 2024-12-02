import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: Boolean(Cookies.get("jwt")), // Check if JWT exists in cookies
  },
  reducers: {
    login: (state) => {
      state.isAuth = true; // Update state to authenticated
    },
    logout: (state) => {
      state.isAuth = false; // Update state to unauthenticated
      Cookies.remove("jwt"); // Remove JWT token from cookies on logout
    },
  },
});

// Export actions for dispatching
export const { login, logout } = authSlice.actions;

// Create store
const store = configureStore({
  reducer: authSlice.reducer,
});

export default store;
