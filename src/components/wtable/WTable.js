import React from "react";
import clsx from "clsx";

function WTable({children, className, ...other}){
    let classes = clsx(
        className
    );

    //color, bg type, hovers, clicks

    return(

        <table className={`wtable ${classes}`} {...other}>
            {children}
        </table>
    );
}

export default WTable;