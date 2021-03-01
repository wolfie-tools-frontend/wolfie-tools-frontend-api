import React from "react";
import clsx from "clsx";
//import "./wbutton.scss";

function WButton({ children, className, onClick, wType, shape, color, size, span, hoverAnimation, clickAnimation, value, disabled, raised, ...other }){
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
    { "raised": raised }
  );

  if ((wType === "ghost") && (hoverAnimation === "lighten" || hoverAnimation === "darken" || hoverAnimation === "colored")) {
    classes = clsx(
      className,
      wType,
      color,
      shape,
      size,
      { "span": span },
      { ["hover-transparent-" + hoverAnimation]: hoverAnimation },
      { ["click-" + clickAnimation]: clickAnimation },
      { "disabled": disabled },
      { "raised": raised }
    );
  }

  if ((wType ==="texted") && (hoverAnimation === "lighten" || hoverAnimation === "darken" || hoverAnimation === "colored")) {
    classes = clsx(
      className,
      wType,
      color,
      shape,
      size,
      { "span": span },
      { ["hover-text-" + hoverAnimation]: hoverAnimation },
      { ["click-" + clickAnimation]: clickAnimation },
      { "disabled": disabled },
      { "raised": raised }
    );
  }

  return (
    <button onClick={onClick}
      className={`wbutton ${classes}`}
      value={value}
      {...other}>
      {children}
    </button>
  );
};

export default WButton;

// wType: (default), ghost, texted, transparent
// color: (default), primary, accent, colored, success, danger, warning
// shape: (default), rounded, pill, circle, square
// size: (default), small, medium, large
// span: (default false), true/false
// hoverAnimation: (none as default), darken, lighten, fill, transparent-darken, transparent-lighten, transparent-colored
// clickAnimation: (none as default), ripple-dark, ripple-light
// disabled: (default true), true/false
// raised: (default true), true/false
