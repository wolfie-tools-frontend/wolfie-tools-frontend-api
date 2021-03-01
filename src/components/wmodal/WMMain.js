import React from "react";
import clsx from "clsx";

function WMMain({ children , className, ...other}) {
    let classes = clsx(
        className
    );


    return (
        <div className={`wMmain ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WMMain;