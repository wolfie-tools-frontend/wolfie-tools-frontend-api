import React from "react";
import WLayout from "../components/wlayout/WLayout";
import WLHeader from "../components/wlayout/WLHeader";
import WLMain from "../components/wlayout/WLMain";
import WLSide from "../components/wlayout/WLSide";
import "./example.scss";
import "../main.scss";

export default function WLayoutPage() {
  return (
    <div className="WLayoutPage">
      <h1>WLayout</h1>

      <div className="definition">Web Layouts of commonly used templates.</div>
      <p>WLayout sections an area into a header, side, main, and footer. We provide a variety of layouts that a user can pick from.
      </p>

    </div>
  );
}
