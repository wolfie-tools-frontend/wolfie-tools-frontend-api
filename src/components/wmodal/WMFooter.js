import React from "react";
import clsx from "clsx";

function WMFooter({ children }, className, ...other) {
    let classes = clsx(
        className
    );


    return (
        <div className={`wMfooter ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WMFooter;