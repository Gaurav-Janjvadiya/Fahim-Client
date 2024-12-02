import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/store";
import { Button } from "./";

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Logout;
