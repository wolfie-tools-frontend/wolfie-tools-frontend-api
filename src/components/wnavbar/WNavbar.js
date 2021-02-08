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
