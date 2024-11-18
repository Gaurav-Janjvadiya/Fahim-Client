import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./layout";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
