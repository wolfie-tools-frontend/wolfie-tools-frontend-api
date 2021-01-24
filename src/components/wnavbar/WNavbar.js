import React from "react";
import clsx from "clsx";
//import "./wnavbar.scss";

function WNavbar({ children, className, onClick, style, color, ...other }) {
  let classes = clsx(
    className,
    color
  );

  return (
    <nav onClick={onClick} className={`wnavbar ${classes}`} style={style} {...other}>
      {children}
    </nav>
  );
};

export default WNavbar;

// wnavbar wrapper
// will contain wnavitems
// li a
// ul class
// li
// li a (link)

//color: (default), primary, accent, colored, success, danger, warning
