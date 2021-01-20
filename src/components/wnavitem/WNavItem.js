import React from "react";
import clsx from "clsx";
import "./wnavitem.scss";

function WNavItem({ children, className, onClick, style, color, hoverAnimation, clickAnimation, ...other }) {
  let classes = clsx(
    className,
    color,
    { ["hover-" + hoverAnimation]: hoverAnimation },
    { ["click-" + clickAnimation]: clickAnimation }
  );

  return (
    <li onClick={onClick} className={`wnavitem ${classes}`} style={style} {...other}>
      {children}
    </li>
  );
};

export default WNavItem;

//color: (default), primary, accent, colored, success, danger, warning
//hoverAnimation: (none as default), darken, lighten, fill, transparent-darken, transparent-lighten, transparent-colored
//clickAnimation: (none as default), ripple-dark, ripple-light
