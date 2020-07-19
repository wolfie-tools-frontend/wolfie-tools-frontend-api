import React from "react";
import "./winput.scss";

const WInput = ({ children, className, style}) => {
  return (
    <div className={`winput ${className}`} style={style}>
      {children}
    </div>
  );
};

export default WInput;
