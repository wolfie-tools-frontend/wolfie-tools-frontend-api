import React from "react";
import "./wbutton.css";

const wButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`wbtn ${className}`}>
      {children}
    </button>
  );
};

export default wButton;
