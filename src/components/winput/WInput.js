import React from "react";
import clsx from "clsx";
//import "./winput.scss";

function WInput({ children, className, inputType, wType, labelText, placeholderText, hoverAnimation, labelAnimation, barAnimation, required, disabled, ...other }) {
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
    { "disabled": disabled }, // disabeled color
    // required, // inside input div
    // shadow // TODO inside input div
    // shape // TODO inside input div
  );

  let input = null;
  if (labelText && labelAnimation) {
    if (labelAnimation === "shrink" || labelAnimation === "up") {
      if (wType === "outlined") { // feildset has hover and bar animation
        input = (<input type={inputType} required className="input-label" placeholder={placeholderText} disabled={disabled} {...other} />);
      } else { // filled & lined (lined does not need to have input label)
        if (disabled) {
          input = (<input type={inputType} required className={" input-label"} placeholder={placeholderText} disabled={disabled} {...other} />);
        } else {
          input = (<input type={inputType} required className={["hover-" + hoverAnimation] + " input-label"} placeholder={placeholderText} {...other} />);
        }
      }
    } else { // fixed label animations - do not need required
      if (disabled) {
        input = (<input type={inputType} required={required} className={" input-label"} placeholder={placeholderText} disabled={disabled} {...other} />);
      } else {
        input = (<input type={inputType} required={required} className={["hover-" + hoverAnimation] + " input-label"} placeholder={placeholderText} {...other} />);
      }
    }
  } else { // no label
    if (disabled) {
      input = (<input type={inputType} required={required} /*className={}*/ placeholder={placeholderText} disabled={disabled} {...other} />);
    } else {
      input = (<input type={inputType} required={required} className={["hover-" + hoverAnimation]} placeholder={placeholderText} {...other} />);
    }
  }

  let span = (
    <span className={["bar-" + barAnimation]} ></span>
  );

  let label = (
    <label className={["label-" + labelAnimation]}>{labelText}</label>
  );

  if (wType === "lined" || wType === "filled") {
    return (
      <div className={`winput ${classes}`}>
        {input}
        {span}
        {label}
        {children}
      </div>
    );
  }

  else if (wType === "outlined") { //outlined - field set & legend

    if (labelText && labelAnimation) {
      if (disabled) {
        return (
          <div className={`winput ${classes}`}>
            <fieldset>
              {input}
              {label}
              {children}
            </fieldset>
          </div>
        );
      } else {
        return (
          <div className={`winput ${classes}`}>
            <fieldset className={["hover-" + hoverAnimation] + " " + ["bar-f-" + barAnimation]}>
              {input}
              {label}
              <legend>{labelText}</legend>
              {children}
            </fieldset>
          </div>
        );
      }
    }

    return (
      <div className={`winput ${classes}`}>
        {input}
        {span}
        {label}
        {children}
      </div>
    );

  }

  else { // default

    //if (barAnimation) {
    return (
      <div className={`winput outlined ${classes}`}>
        {input}
        {span}
        {label}
        {children}
      </div>
    );
    //}

    /*return (
      <div className={`winput outlined ${classes}`}>
        {input}
        <span className="bar-border-highlight" ></span>
        {label}
        {children}
      </div>
    );*/
  }

};

// props
// inputType: text, password, number
// wType: outlined, lined, filled

export default WInput;