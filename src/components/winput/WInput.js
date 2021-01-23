import React from "react";
import clsx from "clsx";
import "./winput.scss";

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
  if(labelText && labelAnimation) {
    if(wType === "filled" || wType ==="outlined" ) {
      input = (<input type={inputType} className={["hover-" + hoverAnimation] + " input-label"} placeholder={placeholderText} />);
    }
    if (labelAnimation === "shrink" || labelAnimation === "up") {
      input = (<input type={inputType} required className={["hover-" + hoverAnimation] + " input-label"} placeholder={placeholderText} />);
    } else {
      input = (<input type={inputType} className={["hover-" + hoverAnimation]} placeholder={placeholderText} />);
    }
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

    if (labelText && labelAnimation) {
      return (
        <div className={`winput ${classes}`} disabled={disabled} {...other}>
          <fieldset>
            {input}
            {span}
            {label}
            <legend>{labelText}</legend>
            {children}
          </fieldset>
        </div>
      );
    }

    return (
      <div className={`winput ${classes}`} disabled={disabled} {...other}>
        {input}
        {span}
        {label}
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

// implement later :
// shadow
// disabled

export default WInput;