import React from "react";

function Button({ type = "button", children, style, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-3 font-bold rounded-2xl hover:bg-[#25ff2ccf] bg-[#0DFF15] text-[#F2F2F2] transition-all duration-200 ease-in-out ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
