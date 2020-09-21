import React from "react";
import WRow from "../components/wgrid/WRow";
import WCol from "../components/wgrid/WCol";
import "./example.css";
import "../main.scss";

export default function WGridPage() {

    return (
        <div className="WGridPage">
            <h1>WGrid</h1>
            <WRow>
                <WCol size="3">
                    <WRow>
                        <WCol size="3" style={{border:"1px dashed"}}>size 3</WCol>
                        <WCol size="9" style={{border:"1px dashed"}}>size 9</WCol>
                    </WRow>
                </WCol>
                <WCol size="9">size 9</WCol>
            </WRow>
            <WRow>
                <WCol size="3">size 3</WCol>
                <WCol size="3">size 3</WCol>
            </WRow>
            <div className="container">
                <WRow>
                    <WCol size="2">size 2</WCol>
                    <WCol size="8">size 8</WCol>
                    <WCol size="2">size 2</WCol>
                </WRow>
            </div>
            <WRow>
                <WCol size="2">size 2</WCol>
            </WRow>
            <WRow>
                <WCol size="0">default size (12)</WCol>
            </WRow>
        </div>
    );
}