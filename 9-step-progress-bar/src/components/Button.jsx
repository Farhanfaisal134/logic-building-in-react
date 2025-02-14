import React from "react";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md border-2 border-gray-500 
      text-xl font-bold 
      ${
        disabled ? "bg-gray-400 cursor-not-allowed text-white" : "bg-yellow-300"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
