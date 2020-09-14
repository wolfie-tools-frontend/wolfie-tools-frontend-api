import React from "react";
import clsx from "clsx";
import "./winput.scss";

const WInput = ({ children, className, style, inputType, wType, labelText, placeholderText, fillColor, hoverAnimation, clickAnimation, labelAnimation, barAnimation, disabled, shadow, ...other }) => {
  let classes = clsx (
    className,
    inputType,
    wType,
    labelText,
    placeholderText,
    fillColor,
    { ["hover-" + hoverAnimation]: hoverAnimation },
    { ["click-" + clickAnimation]: clickAnimation },
    { ["bar-" + barAnimation]: barAnimation },
    { ["label-" + labelAnimation]: labelAnimation },
    { "disabled": disabled },
    shadow
  );

  if (className.match(/\blined\b/) || className.match(/\bfilled\b/)) {
    return (
      <div className={`winput line-animation ${className}`} style={style}>
        {children}
      </div>
    );
  } else { //outlined - field set & legend
    return (
      <div className={`winput ${className}`} 
        style={style}
        {...other}>
        {children}
      </div>
    );
  }
};

// props
// input type-text,password,number
// input style-outlined, lined, filled

// span type-bar(left-right),bar2(center out)
  //bar3(Filled:left-right bar + left-right background)
  // barOutlined(Outlined: -not default as that uses fieldset&legend)

// label type-default = label moves up + shrink
// outline label type-(default, label moves up into outlined box + shrink) uses feildset & legend, **outline should be highlighted in color
  //label2(Outlined:label moves up above outlined box, no shrink),
  //label3(Outlined:label moves up above outlined box + shirnk),
  //label4,(Outlined:label moves up but stays within outlined box + shrink)
  //label5(always above) (not made yet :^)

// label text- label of da input
// placeholder text- (placeholder text for labels that are up)

//filled - T/F
//fill color-
  //Outlined:default = none(transparent)
  //Filled:default = gray/theme color
  //Lined:NA

// hover animation-
// focused/click animation-

// shadow-raised,
// disabled-
export default WInput;
