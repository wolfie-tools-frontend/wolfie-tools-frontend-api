import React from "react";
import clsx from "clsx";
import "./wgrid.scss";

const WCol = ({ children, className, size, ...other }) => {
  let classes = clsx(
    className,
    { ["wcol-" + size]: size },
  );
  return (
     <div className={`wcol ${classes}`}
      {...other}>
      <div>{children}</div>
    </div>
  );
};

export default WCol;
//size prop 1-12
