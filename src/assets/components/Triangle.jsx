import React from "react";

const Triangle = ({ color = "#fff", size = 43 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 15) / 43} // Mantiene la proporción original
      viewBox="0 0 30 20"
      style={{ transform: "rotate(180deg)" }}
    >
      <path d="M21.5,0,43,20H0Z" fill={color} />
    </svg>
  );
};

export default Triangle;
