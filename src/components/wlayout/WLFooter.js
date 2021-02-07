import React from "react";
import clsx from "clsx";

function WLFooter({ children, className, style, ...other }) {
    let classes = clsx(
        className
    );

    return (
        <div className={`wLfooter ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WLFooter;