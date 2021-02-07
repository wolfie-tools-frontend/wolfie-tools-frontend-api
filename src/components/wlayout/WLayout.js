import React from "react";
import clsx from "clsx";

function WLayout({ children, className, style, wLayout, ...other }) {
    let classes = clsx(
        className,
        {[wLayout+"-layout"]:wLayout}
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
