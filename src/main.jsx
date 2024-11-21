import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Features, Home, HowItWorks, Faq, SignUp, Login } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/faq", element: <Faq /> },
      { path: "/features", element: <Features /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
    ],
    errorElement: (
      <h1 className="text-4xl font-bold text-center text-red-600">
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
