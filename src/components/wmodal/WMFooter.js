import React from "react";
import clsx from "clsx";

function WMFooter({ children , className, float, ...other}) {
    let classes = clsx(
        className,
        {["wmf-"+float]:float}
    );


    return (
        <div className={`wMfooter ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WMFooter;