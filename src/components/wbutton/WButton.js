import React from "react";
// import "./wbutton.css";
import "./wbutton.scss";

const WButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`wbtn ${className}`}>
      {children}
    </button>
  );
};

export default WButton;
