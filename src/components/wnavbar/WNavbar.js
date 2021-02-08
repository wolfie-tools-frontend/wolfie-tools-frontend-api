import React from "react";
import clsx from "clsx";
//import "./wnavbar.scss";

function WNavbar({ children, className, onClick, color, ...other }) {
  let classes = clsx(
    className,
    color
  );

  return (
    <nav onClick={onClick} className={`wnavbar ${classes}`} {...other}>
      {children}
    </nav>
  );
};

export default WNavbar;
