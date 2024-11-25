import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const location = useLocation(); // Get the current location

  return (
    <Provider store={store}>
      {/* Only render Header and Footer if the current route is not '/terms' */}
      {location.pathname !== "/terms" && <Header />}
      <Outlet /> {/* This will render the nested routes */}
      {location.pathname !== "/terms" && <Footer />}
    </Provider>
  );
}

export default App;
