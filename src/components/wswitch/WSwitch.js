import React, { useState } from "react";
import clsx from "clsx";
import "./_wswitch.scss";


function WSwitch({ className, disabled, isToggled, onChange, shape, color, size, raised, labelLeft, labelRight, ...other }) {
    const [checked, setChecked] = useState(isToggled? isToggled: false );

    let classes = clsx(
        // define default switch class here
        className,
        shape,
        size,
        color,
        { "disabled": disabled },
        { "raised": raised }
    );

    return (
        <div className="wswitch">
            <div className="wswitch-left-label">{labelLeft? labelLeft: ""}</div>
            
            <label className={`wswitch-switch ${classes}`}>
                <input
                    className="wswitch-switch-checkbox"
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    onChange={onChange? () => onChange() : () => setChecked(!checked)}
                />

                <span
                    className="wswitch-switch-slider"
                />

            </label>

            <div className="wswitch-right-label">{labelRight? labelRight: ""}</div>  

        </div>

    );
}

export default WSwitch;


/*
return (
        <div className={`wswitch ${classes}`}>
            <input
                type="checkbox"
                className="wswitch-checkbox"
                name="toggleSwitch"
                id="toggleSwitch"
            />

            <label className="wswitch-label" htmlFor="toggleSwitch">
                <span
                    className="wswitch-back"
                    data-left = {labelLeft? labelLeft : "Yes"}
                    data-right = {labelRight? labelRight : "No"}
                />
                <span className="wswitch-slider" />
            </label>
        </div>

    );
    */


