import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Home,
  SignUp,
  Login,
  LandingPage,
  Courses,
  JoinUs,
  Professors,
  TermsAndConditions,
  Professor,
  Course,
  Settings,
  ManageCourses,
  MoreCourses
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/terms", element: <TermsAndConditions /> },

      // Protecting all routes
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/home/edit",
        element: (
          <ProtectedRoute>
            <ManageCourses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/home/moreCourses",
        element: (
          <ProtectedRoute>
            <MoreCourses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/courses",
        element: (
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/courses/:courseReviewId",
        element: (
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        ),
      },
      {
        path: "/join-us",
        element: (
          <ProtectedRoute>
            <JoinUs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/professors",
        element: (
          <ProtectedRoute>
            <Professors />
          </ProtectedRoute>
        ),
      },
      {
        path: "/professors/:professorId",
        element: (
          <ProtectedRoute>
            <Professor />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: (
      <h1 className="text-4xl flex justify-center items-center font-bold text-center text-red-600">
        404 Not Found
      </h1>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
