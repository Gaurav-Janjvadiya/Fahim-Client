import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../redux/store";

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("jwt");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
