import React from "react";

const Button = ({ text, styles }) => {
  return (
    <button
      className={`${styles} w-[153px] h-[48px] rounded-full 
          cursor-pointer text-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
