import React from "react";
import clsx from "clsx";

function WLayout({ children, className, onClick, style, wLayout, ...other }) {
    let classes = clsx(
        className,
        wLayout
    );

    let layout = (
        <div className={`wlayout ${classes}`} style={style} {...other}>
            {children}
        </div>
    );

    return (
        layout
    );
};

export default WLayout;
