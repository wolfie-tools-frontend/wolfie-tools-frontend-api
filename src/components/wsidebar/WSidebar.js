import React from "react";
import clsx from "clsx";
import "./wsidebar.scss";

// import WCol from "../wgrid/WCol";
// import WRow from "../wgrid/WRow";

function WSidebar({ children, className, onClick, style, color, ...other }) {
  let classes = clsx(
    className,
    color
  );

  return (
    <div style={{ position: "sticky", top: '0' }}>
      <nav onClick={onClick} className={`wsidebar ${classes}`} style={style} {...other}>
        {children}
      </nav>
    </div>
  );
};

export default WSidebar;

// wsidebar wrapper
// will contain wnavitems
// li a
// ul class
// li
// li a (link)

// color: (default), primary, accent, colored, success, danger, warning
