import React from "react";
import clsx from "clsx";

function WModal({children, className, visible, ...other}){
    let classes = clsx(
        className
    );

    return (<>
    {visible 
            ?
            <>
                <div className={`wmodal ${classes}`} {...other}>
                    {children}
                    
                </div>
                <div className="wmodal-overlay"/> 
            </>
            :
            <></>
        }
    </>)
        
    

}

export default WModal;