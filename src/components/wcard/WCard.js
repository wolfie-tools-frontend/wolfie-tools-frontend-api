import React from "react";
import clsx from "clsx";

function WCard({ children, className, style, color, wLayout, hoverAnimation, raised, ...other }) {
    let classes = clsx(
        className,
        { [wLayout + "-layout"]: wLayout },
        color,
        { ["hover-" + hoverAnimation]: hoverAnimation },
        { "raised": raised }
    );

    let layout = (
        <div className={`wcard ${classes}`} style={style} {...other}>
            {children}
        </div>
    );

    return (
        layout
    );
};

export default WCard;