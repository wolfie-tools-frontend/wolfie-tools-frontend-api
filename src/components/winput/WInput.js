import React from "react";
import "./winput.scss";

const WInput = ({ children, className, type, style, min, max, value, name }) => {
  return (
    <div className={`winput ${className}`} style={style}>
      {children}
    </div>
  );
};

export default WInput;
