import React from "react";
import WLayout from "../components/wlayout/WLayout";
import WLHeader from "../components/wlayout/WLHeader";
import WLMain from "../components/wlayout/WLMain";
import WLSide from "../components/wlayout/WLSide";
import WLFooter from "../components/wlayout/WLFooter";
import WCard from "../components/wcard/WCard";
import WCHeader from "../components/wcard/WCHeader";
import WCMedia from "../components/wcard/WCMedia";
import WCContent from "../components/wcard/WCContent";
import WCFooter from "../components/wcard/WCFooter";
import "./example.scss";
import "../main.scss";

export default function WLayoutPage() {
  return (
    <div className="WLayoutPage">
      <h1>WLayout</h1>

      <div className="definition">Web Layouts of commonly used templates.</div>
      <p>WLayout sections an area into a header, side, main, and footer. We provide a variety of layouts that a user can pick from.
      </p>

      <WCard style={{ width: "500px", height: "500px" }} raised>
        <WLayout wLayout="header-lside-footer">
          <WLHeader style={{ backgroundColor: "salmon", height: "10px"}}></WLHeader>
          <WLSide side="left" style={{ backgroundColor: "cornflowerblue", height: "10px"}}></WLSide>
          <WLMain style={{ backgroundColor: "wheat", height: "10px"}}></WLMain>
          <WLFooter style={{ backgroundColor: "palegreen", height: "10px"}}></WLFooter>
        </WLayout>
      </WCard>


    </div>
  );
}
