import React from "react";

function Button({ type = "button", children, style, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-3 font-bold rounded-2xl hover:bg-[#7FFF00] bg-[#39FF14] text-[#E8F5E9] transition-all duration-200 ease-in-out ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
