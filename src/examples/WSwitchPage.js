import React from "react";
import WSwitch from "../components/wswitch/WSwitch";
import "./example.scss";
import "../main.scss";

export default function WSwitchPage() {

    return (
        <div className="WSwitchPage">
            <h1>WSwitch</h1>
            <div className="definition">Toggles the state to on or off</div>
            <p>On click functionality.</p>

            <br></br>
            <h2>Shapes</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>
                            <WSwitch></WSwitch>
                        </td>
                    </tr>
                    <tr>
                        <td>Rounded</td>
                        <td>
                            <WSwitch
                                shape="rounded"
                            >
                            </WSwitch>
                        </td>
                    </tr>
                    <tr>
                        <td>Pill</td>
                        <td>
                            <WSwitch
                                shape="pill"
                            >
                            </WSwitch>
                        </td>
                    </tr>

                </tbody>
            </table>



            <br></br>
            <h2>Labels provided</h2>
            <WSwitch
                labelLeft="OFF"
                labelRight="ON"
            >
            </WSwitch>

            <br></br>
            <h2>Disabled</h2>
            <WSwitch
                disabled="true"
            >
            </WSwitch>

            <br></br>
            <h2>Raised</h2>
            <WSwitch
                raised="true"
            >
            </WSwitch>


            <br></br>
            <h2>Starting checked vs unchecked</h2>
            <h4>Default (unchecked)</h4>
            <WSwitch></WSwitch>
            <h4>Starting Checked</h4>
            <WSwitch
                isToggled={true}
            ></WSwitch>


            <br></br>
            <h2>Colors</h2>

            <table>
                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>
                        <div className="side-by-side">
                                <WSwitch
                                isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="rounded"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="pill"
                                    isToggled={true}
                                >
                                </WSwitch>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Primary</td>
                        <td>
                            <div className="side-by-side">
                                <WSwitch
                                    color="primary"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="rounded"
                                    color="primary"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="pill"
                                    color="primary"
                                    isToggled={true}
                                >
                                </WSwitch>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Accent</td>
                        <td>
                            <div className="side-by-side">
                                <WSwitch
                                    color="accent"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="rounded"
                                    color="accent"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="pill"
                                    color="accent"
                                    isToggled={true}
                                >
                                </WSwitch>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Success</td>
                        <td>
                            <div className="side-by-side">
                                <WSwitch
                                    color="success"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="rounded"
                                    color="success"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="pill"
                                    color="success"
                                    isToggled={true}
                                >
                                </WSwitch>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Danger</td>
                        <td>
                            <div className="side-by-side">
                                <WSwitch
                                    color="danger"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="rounded"
                                    color="danger"
                                    isToggled={true}
                                >
                                </WSwitch>
                                <WSwitch
                                    shape="pill"
                                    color="danger"
                                    isToggled={true}
                                >
                                </WSwitch>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>




        </div >
    );
}