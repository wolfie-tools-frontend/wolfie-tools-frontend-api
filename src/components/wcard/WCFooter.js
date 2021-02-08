import React from "react";
import clsx from "clsx";

function WCFooter({ children, className, ...other }) {
    let classes = clsx(
        className
    );

    return (
        <div className={`wCfooter ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WCFooter;