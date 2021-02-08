import React from "react";
import clsx from "clsx";

function WLSide({ children, className, side, ...other }) {
    let classes = clsx(
        className,
        {"wLside-l":side=="left", "wLside-r":side=="right"}
    );

    return (
        <div className={`${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WLSide;