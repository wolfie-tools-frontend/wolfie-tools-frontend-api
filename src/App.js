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
          <td>Primary Colored button</td>
          <td>
            <WButton className="primary small">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Medium Accent Colored button</td>
          <td>
            <WButton className="accent medium pill">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Large Accent Colored button</td>
          <td>
            <WButton className="accent large">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Small Round button</td>
          <td>
            <WButton className="rounded small ghost">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Large button with Shadow</td>
          <td>
            <WButton className="shadow large">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Disabled Button</td>
          <td>
            <WButton className="colored medium">Button</WButton>
          </td>
        </tr>
        <tr>
          <td>Test Button</td>
          <td>
            <WButton className="medium ghost pill">Test Button</WButton>
          </td>
        </tr>
      </table>

      <WButton className="large span">Span Button</WButton>
    </div>
  );
}
