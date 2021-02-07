import React from "react";
function WLHeader({ children, className, style, ...other }) {

    return (
        <div className={`wLheader ${className}`} {...other}>
            {children}
        </div>
    );
}

export default WLHeader;