import React from "react";

const Pattern = ({ img, styles }) => {
  return (
    <div>
      <img
        src={img}
        alt="backgound pattern"
        className={`absolute object-contain -z-[1] ${styles}`}
      />
    </div>
  );
};

export default Pattern;
