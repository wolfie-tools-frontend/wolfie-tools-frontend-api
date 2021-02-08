import React from "react";
import clsx from "clsx";
//import "./wnavitem.scss";

function WNavItem({ children, className, onClick, color, hoverAnimation, clickAnimation, ...other }) {
  let classes = clsx(
    className,
    color,
    { ["hover-" + hoverAnimation]: hoverAnimation },
    { ["click-" + clickAnimation]: clickAnimation }
  );

  if (hoverAnimation === "lighten" || hoverAnimation === "darken") {
    classes = clsx(
      className,
      color,
      { ["hover-transparent-" + hoverAnimation]: hoverAnimation },
      { ["click-" + clickAnimation]: clickAnimation }
    );
  }

  return (
    <li onClick={onClick} className={`wnavitem ${classes}`} {...other}>
      {children}
    </li>
  );
};

export default WNavItem;
