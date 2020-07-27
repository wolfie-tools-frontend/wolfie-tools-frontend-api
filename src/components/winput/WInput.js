import React from "react";
import "./winput.scss";

const WInput = ({ children, className, style}) => {
  if (className.match(/\blined\b/) || className.match(/\bfilled\b/)) {
    return (
      <div className={`winput line-animation ${className}`} style={style}>
        {children}
      </div>
    );
  } else {
    return (
      <div className={`winput ${className}`} style={style}>
        {children}
      </div>
    );
  }
};

export default WInput;
