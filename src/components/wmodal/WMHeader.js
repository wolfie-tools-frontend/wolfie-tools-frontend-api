import React from "react";
import clsx from "clsx";
import WButton from "../wbutton/WButton";

function WMHeader({ children , className, onClose, hoverAnimation, clickAnimation,  ...other}) {
    let classes = clsx(
        className
    );

    console.log(onClose);

    return (
        <div className={`wMheader ${classes}`} {...other}>
            {children}
            {onClose ? <WButton className="modal-header-button" onClick={onClose} hoverAnimation={hoverAnimation} clickAnimation={clickAnimation} wType="texted" color="colored">
                            <i className="material-icons small">close</i>
                       </WButton> 
                     : <></>}
        </div>
    );
}

export default WMHeader;