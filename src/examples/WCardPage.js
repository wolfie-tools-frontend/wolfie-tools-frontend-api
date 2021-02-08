import React from "react";
import WButton from "../components/wbutton/WButton";
import WCard from "../components/wcard/WCard";
import WCHeader from "../components/wcard/WCHeader";
import WCMedia from "../components/wcard/WCMedia";
import WCContent from "../components/wcard/WCContent";
import WCFooter from "../components/wcard/WCFooter";
import "./example.scss";
import "../main.scss";

export default function WCardPage() {
  return (
    <div>
      <h1>WCard</h1>
      <div className="definition">Display information on a card.</div>
      <p>Create sections of information.</p>

      <WCard wLayout="header-media-content-footer" style={{ width: "500px", height: "500px" }} raised>
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}></WCHeader>
        <WCMedia></WCMedia>
        <WCContent></WCContent>
        <WCFooter></WCFooter>
      </WCard>

    </div>
  );
}
