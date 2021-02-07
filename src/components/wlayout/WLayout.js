import React from "react";
import clsx from "clsx";

function WLayout({ children, className, onClick, style, layout, ...other }) {
    let classes = clsx(
        className,
        wLayout
    );

    let layout = (
        <div className={`wlayout ${classes}`} style={style} {...other}>
            {children}
        </div>
    );

    if (wLayout === "header") {

    }

    if (wLayout === "navbar") {

    }

    if (wLayout === "navbar-sidebar") {

    }

    if (wLayout === "footer") {

    }

    if (wLayout === "navbar-sidebar-footer") {

    }

    if (wLayout === "sidebar") {

    }

    if (wLayout === "header-footer") {

    }


    return (
        layout;
    );
};

export default WLayout;
