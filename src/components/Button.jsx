import React from "react";

function Button({ type = "button", children, style, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ textShadow: "2px 2px 5px gray" }}
      className={`px-5 py-3 font-bold rounded-full hover:bg-[#7FFF00] active:bg-[#37ff14de] bg-[#39FF14] text-[#E8F5E9] transition-all duration-200 ease-in-out ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
