import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
