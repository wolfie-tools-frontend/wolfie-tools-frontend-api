import React from "react";
import clsx from "clsx";
import "./wbutton.scss";

const WButton = ({ children, className, onClick, style, btnType, shape, color, size, span, hoverAnimation, clickAnimation, value, disabled, shadow}) => {
  //will only add classname if these values aren't empty/undefined
  let classes = clsx(
    className, 
    btnType, //btnType: (default), ghost, texted, transparent
    color, //color: (default), primary, accent, colored, success, danger, warning
    shape, //shape: (default), rounded, pill, circle, square
    size, //size: (default), small, medium, large
    {"span":span}, //span: (default false), true/false
    {["hover-"+hoverAnimation]:hoverAnimation}, //hoverAnimation: (none as default), darken, lighten, fill, transparent-darken, transparent-lighten, transparent-colored
    clickAnimation, //clickAnimation: (none as default), ripple-dark, ripple-light
    {"disabled":disabled}, //disabled: (default true), true/false
    shadow //shadow: raised, ?
  );

  return (
    <button onClick={onClick} 
            className={`wbutton ${classes}`}
            style={style} value={value}
            disabled={disabled}>
      {children}
    </button>
  );
};

export default WButton;

//built in props/attributes that we don't have (NEED TO ADD)
//autofocus, form, formaction, formenctype, formmethod, formnovalidate, formtarget, name, value
//accesskey, contenteditable, data-*, dir, draggable, hidden, id, lang, spellcheck, tabindex, title, translate