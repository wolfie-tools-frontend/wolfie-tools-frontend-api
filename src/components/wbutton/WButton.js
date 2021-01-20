import React from "react";
import clsx from "clsx";
import "./wbutton.scss";

function WButton({ children, className, onClick, style, wType, shape, color, size, span, hoverAnimation, clickAnimation, value, disabled, shadow, ...other }){
  // will only add classname if these values aren't empty/undefined
  let classes = clsx(
    className,
    wType,
    color,
    shape,
    size,
    { "span": span },
    { ["hover-" + hoverAnimation]: hoverAnimation },
    { ["click-" + clickAnimation]: clickAnimation },
    { "disabled": disabled },
    shadow
  );

  return (
    <button onClick={onClick}
      className={`wbutton ${classes}`}
      style={style} value={value}
      disabled={disabled}
      {...other}>
      {children}
    </button>
  );
};

export default WButton;

// btnType: (default), ghost, texted, transparent
// color: (default), primary, accent, colored, success, danger, warning
// shape: (default), rounded, pill, circle, square
// size: (default), small, medium, large
// span: (default false), true/false
// hoverAnimation: (none as default), darken, lighten, fill, transparent-darken, transparent-lighten, transparent-colored
// clickAnimation: (none as default), ripple-dark, ripple-light
// disabled: (default true), true/false
// shadow: raised, ?
