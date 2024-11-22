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
    <button
      onClick={handleLogout}
      className="bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-100"
    >
      Logout
    </button>
  );
}

export default Logout;
