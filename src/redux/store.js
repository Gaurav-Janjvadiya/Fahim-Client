import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: Boolean(Cookies.get("jwt")),
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      Cookies.remove("jwt");
    },
  },
});

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course !== action.payload
      );
    },
  },
});

// Export actions for dispatching
export const { login, logout } = authSlice.actions;
export const { addCourse, removeCourse } = courseSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: courseSlice.reducer,
  },
});

export default store;
