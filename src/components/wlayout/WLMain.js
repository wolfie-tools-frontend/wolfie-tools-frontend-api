import React from "react";
import clsx from "clsx";

function WLMain({ children, className, style, ...other }) {
    let classes = clsx(
        className
    );

    return (
        <div className={`wLmain ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WLMain;