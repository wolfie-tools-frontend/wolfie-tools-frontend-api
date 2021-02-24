import React, { useState } from "react";
import WButton from "../components/wbutton/WButton";
import WModal from "../components/wmodal/WModal";

import "./example.scss";
import "../main.scss";

export default function WModalPage() {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    return (
        <div className="WModalPage">
            <h1>WModal</h1>
            <p> Without Overlay</p>
            <WButton onClick={() => setModal1(true)}>
                Show
            </WButton>
            <WModal visible={modal1} animation="from-top">
                <p className="wmodal-header">Test</p>
                <p className="wmodal-main">Here is the content</p>
                <div className="wmodal-footer">
                    <WButton onClick={() => (setModal1(false))}>
                        Close
                    </WButton>
                </div>
            </WModal>

            <p> With Overlay</p>
            <WButton onClick={() => setModal2(true)}>
                Show
            </WButton>
            <WModal cover={true} visible={modal2}>
                <p className="wmodal-header">Test</p>
                <p className="wmodal-main">Here is the content</p>
                <div className="wmodal-footer">
                    <WButton onClick={() => (setModal2(false))}>
                        Close
                    </WButton>
                </div>

            </WModal>

        </div>
    )
}