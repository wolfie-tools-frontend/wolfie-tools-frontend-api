import React from "react";
import clsx from "clsx";

function WCContent({ children, className, ...other }) {
    let classes = clsx(
        className
    );

    return (
        <div className={`wCcontent ${classes}`} {...other}>
            {children}
        </div>
    );
}

export default WCContent;