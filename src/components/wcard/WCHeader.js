import React from "react";
import clsx from "clsx";

function WCHeader({ children, className, ...other }) {
    let classes = clsx(
        className
    );

    return (
        <div className={`wCheader ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WCHeader;
