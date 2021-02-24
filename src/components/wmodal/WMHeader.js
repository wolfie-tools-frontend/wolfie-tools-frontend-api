import React from "react";
import clsx from "clsx";

function WMHeader({ children }, className, ...other) {
    let classes = clsx(
        className
    );


    return (
        <div className={`wMheader ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WMHeader;