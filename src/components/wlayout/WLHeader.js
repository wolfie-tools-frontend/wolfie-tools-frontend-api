import React from "react";
import clsx from "clsx";

function WLHeader({ children, className, ...other }) {
    let classes = clsx(
        className
    );

    return (
        <div className={`wLheader ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WLHeader;