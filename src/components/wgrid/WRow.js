import React from "react";
import clsx from "clsx";
//import "./wgrid.scss";

function WRow({ children, className, ...other }) {
  let classes = clsx(className);

  return (
    <div className={`wrow ${classes}`}
      {...other}>
      {children}
    </div>
  );
};

export default WRow;
