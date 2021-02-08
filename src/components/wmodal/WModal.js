import React from "react";
import clsx from "clsx";

function WModal({ children, className, visible, cover, ...other }) {
    let classes = clsx(
        className,
        {"visible":visible}
    );

    return (<>
        <div className={`wmodal ${classes}`} {...other}>
            {children}
        </div>
        <div className={"wmodal-overlay"  +(cover ? " cover" : "") + (visible ? " visible" : "")} />
    </>)



}

export default WModal;