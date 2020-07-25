import React from "react";
import clsx from "clsx";
import "./wnavbar.scss";

const WNavbar = ({ children, className, onClick, style, color }) => {
  let classes = clsx(
    className, 
    color
  );

  return (
    <nav onClick={onClick} className={`wnavbar ${classes}`} style={style}>
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

//color: (default), primary, accent, colored, success, danger, warning
