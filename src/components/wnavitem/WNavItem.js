import React from "react";
import clsx from "clsx";
import "./wnavitem.scss";

const WNavItem = ({ children, className, onClick, style, color, hoverAnimation, clickAnimation }) => {
  let classes = clsx(
    className, 
    color,
    {["hover-"+hoverAnimation]:hoverAnimation}, 
    clickAnimation
  );

  return (
    <nav onClick={onClick} className={`wnavitem ${classes}`} style={style}>
      {children}
    </nav>
  );
};

export default WNavItem;

//color: (default), primary, accent, colored, success, danger, warning
//hoverAnimation: (none as default), darken, lighten, fill, transparent-darken, transparent-lighten, transparent-colored
//clickAnimation: (none as default), ripple-dark, ripple-light
