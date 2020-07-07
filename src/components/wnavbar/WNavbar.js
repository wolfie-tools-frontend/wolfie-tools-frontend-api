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
// li a
// ul class
// li
// li a (link)
