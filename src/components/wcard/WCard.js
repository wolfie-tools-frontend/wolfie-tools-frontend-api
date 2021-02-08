import React from "react";
import clsx from "clsx";

function WCard({ children, className, color, wLayout, hoverAnimation, raised, ...other }) {
    let classes = clsx(
        className,
        { [wLayout + "-layout"]: wLayout },
        color,
        { ["hover-" + hoverAnimation]: hoverAnimation },
        { "raised": raised }
    );

    let layout = (
        <div className={`wcard ${classes}`} {...other}>
            {children}
        </div>
    );

    return (
        layout
    );
};

export default WCard;