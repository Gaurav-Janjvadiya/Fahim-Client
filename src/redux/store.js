import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false, // Initial state
  },
  reducers: {
    login: (state) => {
      state.isAuth = true; // Update state
    },
    logout: (state) => {
      state.isAuth = false; // Update state
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
