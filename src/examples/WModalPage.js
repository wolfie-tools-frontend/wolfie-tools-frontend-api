import React, { useState } from "react";
import WButton from "../components/wbutton/WButton";
import WModal from "../components/wmodal/WModal";

import "./example.scss";
import "../main.scss";

export default function WModalPage() {
    const [modal1, setModal1] = useState(false);

    return (
        <div className="WModalPage">
            <h1>WModal</h1>
            <WButton onClick={()=>setModal1(true)}>
                Show
            </WButton>
            <WModal visible={modal1}>
                testwowowowo
                <br/> 
                <WButton onClick ={()=>(setModal1(false))}>
                    Close
                </WButton>
            </WModal>
        </div>
    )
}