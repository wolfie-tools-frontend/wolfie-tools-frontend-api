import React from "react";
import WButton from "./components/wbutton/WButton";
import "./base.css";
import "./main.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <table>
        <tr>
          <td>Default button</td>
          <td>
            <WButton>Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Primary Small button</td>
          <td>
            <WButton className="primary small">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Medium Pill Colored button</td>
          <td>
            <WButton className="medium pill colored">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Large Ghost Colored button</td>
          <td>
            <WButton className="accent large ghost colored">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Small Rounded Ghost button</td>
          <td>
            <WButton className="rounded small ghost">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Large Accent Shadowed button</td>
          <td>
            <WButton className="shadowed large accent">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Disabled button</td>
          <td>
            <WButton className="medium disabled">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Transparent button</td>
          <td>
            <WButton className="medium transparent pill">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Custom Color button</td>
          <td>
            <WButton style={{ backgroundColor: "teal" }} className="small pill">
              B1
            </WButton>
            <WButton className="small pill red">B2</WButton>
            <WButton className="small pill" style={{ color: "yellow" }}>
              B3
            </WButton>
          </td>
        </tr>
      </table>
      <WButton className="large span">Span Button</WButton>
    </div>
  );
}
