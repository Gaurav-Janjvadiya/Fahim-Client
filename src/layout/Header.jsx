import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen justify-between align-center flex p-5">
      <div>
        <Link className="font-bold" to={"/"}>
          Fahim
        </Link>
      </div>
      <div className="hidden sm:flex justify-between items-center md:w-[35vw]">
        <Link className="mx-2" to={"/features"}>
          Features
        </Link>
        <Link className="mx-2 text-nowrap" to={"/how-it-works"}>
          How it Works?
        </Link>
        <Link className="mx-2" to={"/about"}>
          About
        </Link>
        <Link className="mx-2" to={"/faq"}>
          Q&A
        </Link>
      </div>
      <div>
        <Link className="text-[#0d0d0d] text-nowrap bg-gray-50 px-5 py-2 hover:bg-gray-200 rounded-2xl">
          Sign up/in
        </Link>
      </div>
    </div>
  );
}

export default Header;
