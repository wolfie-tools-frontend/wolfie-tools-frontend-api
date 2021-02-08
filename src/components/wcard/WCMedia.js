import React from "react";
import clsx from "clsx";

function WCMedia({ children, className, ...other }) {
    let classes = clsx(
        className,
        //{"wCmedia-l":side=="left", "wCmedia-r":side=="right"}
    );

    return (
        <div className={`wCmedia ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WCMedia;