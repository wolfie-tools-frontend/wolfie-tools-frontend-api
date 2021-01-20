import React from "react";
import clsx from "clsx";
import "./wgrid.scss";

function WCol({ children, className, size, ...other }) {
  let classes = clsx(
    className,
    { ["wcol-" + size]: size },
  );

  return (
    <div className={`wcol ${classes}`}
      {...other}>
      {children}
    </div>
  );
};

export default WCol;
// size prop 1-12
