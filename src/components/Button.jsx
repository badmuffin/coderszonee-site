import React from "react";

const Button = ({ label, bgColor, border, textColor }) => {
  return (
    <button
      className={`flex justify-center items-center cursor-pointer border-2
        ${bgColor} ${border} ${textColor} 
        rounded-3xl text-lg font-bold px-8 py-4`}
    >
      {label}
    </button>
  );
};

export default Button;
