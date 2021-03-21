import React from "react";
import clsx from "clsx";
import WButton from "../wbutton/WButton";

function WMHeader({ children , className, onClose, ...other}) {
    let classes = clsx(
        className
    );

    console.log(onClose);

    return (
        <div className={`wMheader ${classes}`} {...other}>
            {onClose ? <WButton className="modal-header-button" onClick={onClose} wType="texted">
                            <i className="material-icons medium">close</i>
                       </WButton> 
                     : <></>}
            {children}
        </div>
    );
}

export default WMHeader;