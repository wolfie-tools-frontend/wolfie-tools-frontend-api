import React from "react";
import clsx from "clsx";
//import "./winput.scss";

function WInput({ children, className, style, inputType, wType, labelText, placeholderText, fillColor, hoverAnimation, labelAnimation, barAnimation, required, disabled, shadow, ...other }) {
  let classes = clsx(
    className,
    // inputType, // inside input div
    wType,
    // labelText, // inside label div
    // placeholderText, // inside input div
    // fillColor, // TODO inside input div
    // { ["hover-" + hoverAnimation]: hoverAnimation }, // inside input div
    // { ["bar-" + barAnimation]: barAnimation }, // inside span div
    // { ["label-" + labelAnimation]: labelAnimation }, // inside label div
    { "disabled": disabled }, // TODO
    // required, // inside input div
    // shadow // TODO inside input div
  );

  let input = null; 
  if (labelAnimation === "shrink" || labelAnimation==="up") {
    input = (<input type={inputType} required className={["hover-" + hoverAnimation]} placeholder={placeholderText} />);

  } else {
    input = (<input type={inputType} required={required} className={["hover-" + hoverAnimation]} placeholder={placeholderText} />);
  }

  let span = (
    <span className={["bar-" + barAnimation]} ></span>
  );

  let label = (
    <label className={["label-" + labelAnimation]}>{labelText}</label>
  );

  if (wType === "lined" || wType === "filled") {
    return (
      <div className={`winput ${classes}`} disabled={disabled} {...other}>
        {input}
        {span}
        {label}
        {children}
      </div>
    );
  }

  else if (wType === "outlined") { //outlined - field set & legend

    return (
      <div className={`winput ${classes}`}
        disabled={disabled}
        {...other}>
        {children}
      </div>
    );

  }

  else { // default

    return (
      <div className={`winput ${classes}`}
        disabled={disabled}
        {...other}>
        {children}
      </div>
    );
  }

};

// props
// inputType: text,password,number
// wType: outlined, lined, filled

// barAnimation: left-right, center-out
//bar-shade(Filled:left-right bar + left-right background)
//bar-solid(Outlined: -not default as that uses fieldset&legend)

// outline label type-(default, label moves up into outlined box + shrink) uses feildset & legend, **outline should be highlighted in color
//label2(Outlined:label moves up above outlined box, no shrink),
//label3(Outlined:label moves up above outlined box + shirnk),
//label4,(Outlined:label moves up but stays within outlined box + shrink)

//fill color-
//Outlined:default = none(transparent)
//Filled:default = gray/theme color
//Lined:NA

// implement later :
// shadow-raised,
// disabled-

export default WInput;