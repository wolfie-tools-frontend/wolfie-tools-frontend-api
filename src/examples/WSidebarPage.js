import React from "react";
import WButton from "../components/wbutton/WButton";
import WNavbar from "../components/wnavbar/WNavbar";
import WNavItem from "../components/wnavitem/WNavItem";
import "./example.scss";
import "../main.scss";

export default function WSidebarPage() {
  return (
    <div className="WSidebarPage">
      <h1>WSidebar</h1>
      <div className="definition">Side navigation used to redirect</div>
      <p>WSidebar is a vertical WNavbar. It also uses WNavItems as its children.
      It stays on the left side of your screen as you scroll through the webpage.</p>
      
     
    </div>
  );
}
