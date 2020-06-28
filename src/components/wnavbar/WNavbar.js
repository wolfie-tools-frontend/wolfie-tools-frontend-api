import React from "react";
import "./wnavbar.scss";

const WNavbar = ({ children, className, onClick, style }) => {
  return (
    <nav onClick={onClick} className={`wnavbar ${className}`} style={style}>
      {children}
    </nav>
  );
};

export default WNavbar;

// wnavbar wrapper
// a
// ul class
// li
// a (link)
