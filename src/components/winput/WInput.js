import React from "react";
import clsx from "clsx";
import "./winput.scss";

function WInput({ children, className, style, inputType, wType, labelText, placeholderText, fillColor, hoverAnimation, labelAnimation, barAnimation, disabled, shadow, ...other }) {
  let classes = clsx(
    className,
    inputType,
    wType,
    labelText,
    placeholderText,
    fillColor,
    { ["hover-" + hoverAnimation]: hoverAnimation },
    { ["bar-" + barAnimation]: barAnimation },
    { ["label-" + labelAnimation]: labelAnimation },
    { "disabled": disabled },
    shadow
  );

  let input = null;

  if (barAnimation == null) {
    input = (
      <input type={inputType} required="required" />
    );
  } else if (barAnimation) {
    input = (
      <input type={inputType} required="required" className={"???"}/>
    );
  }
  
  if (wType === "lined" || wType === "filled") {

    if (inputType) {
      if (barAnimation) {
        return (
          <div className={`winput ${classes}`}
            disabled={disabled}
            {...other}>
            <input type={inputType} required="required" />
            <span class={["bar-" + barAnimation]}></span>
            {children}
          </div>
        );
      }

      return (
        <div className={`winput ${classes}`}
          disabled={disabled}
          {...other}>
          <input type={inputType}  required="required" />
          <span class="bar-left-to-right"></span>
          {children}
        </div>
      );

    } else { // no input type default = text

      if (barAnimation) {
        return (
          <div className={`winput ${classes}`}
            disabled={disabled}
            {...other}>
            <input type={inputType} className="hover-solid" required="required" />
            <span class={["bar-" + barAnimation]}></span>
            {children}
          </div>
        );
      }

      return (
        <div className={`winput ${classes}`}
          disabled={disabled}
          {...other}>
          <input type="text" required="required" />
          <span class="bar-left-to-right"></span>
          {children}
        </div>
      );
    }

  }

  else if (wType === "outlined") { //outlined - field set & legend
    if (inputType) {
      return (
        <div className={`winput ${classes}`}
          disabled={disabled}
          {...other}>
          <input type={inputType} required="required" />
          {children}
        </div>
      );
    } else { // no input type default = text
      return (
        <div className={`winput ${classes}`}
          disabled={disabled}
          {...other}>
          <input type="text" required="required" />
          {children}
        </div>
      );
    }
  }


  else { // default
    if (inputType) {
      return (
        <div className={`winput ${classes}`}
          disabled={disabled}
          {...other}>
          <input type={inputType} required="required" />
          {children}
        </div>
      );
    } else { // no input type default = text
      return (
        <div className={`winput ${classes}`}
          disabled={disabled}
          {...other}>
          <input type="text" required="required" />
          {children}
        </div>
      );
    }
  }
};

// add required as prop //

// props
// inputType-text,password,number*
// wType-outlined, lined, filled

// span bar-animation = left-right, center-out
//bar3(Filled:left-right bar + left-right background)
// barOutlined(Outlined: -not default as that uses fieldset&legend)

// label type-default = label moves up + shrink
// outline label type-(default, label moves up into outlined box + shrink) uses feildset & legend, **outline should be highlighted in color
//label2(Outlined:label moves up above outlined box, no shrink),
//label3(Outlined:label moves up above outlined box + shirnk),
//label4,(Outlined:label moves up but stays within outlined box + shrink)
//label5(always above)

// label text- label of da input
// placeholder text- (placeholder text for labels that are up)

//filled - T/F
//fill color-
//Outlined:default = none(transparent)
//Filled:default = gray/theme color
//Lined:NA

// hoverAnimation - T/F
// barAnimation

// implement later :
// shadow-raised,
// disabled-

export default WInput;