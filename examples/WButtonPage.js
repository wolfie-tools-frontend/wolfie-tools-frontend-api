import React from "react";
import WButton from "../src/components/wbutton/WButton";
import "./example.css";
import "../src/main.scss";

export default function WButtonPage() {
  function myFunction() {
    alert("I am an alert box!");
  }

  return (
    <div className="WButtonPage">
      <h1>Buttons</h1>
      <table>
        <tbody>
          <tr>
            <td>Default Hover-lighten button</td>
            <td>
              <WButton className="hover-lighten">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Default Hover-darken button</td>
            <td>
              <WButton className="hover-darken">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Primary Small Hover-darken button</td>
            <td>
              <WButton
                className="primary small hover-darken"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Pill Colored button</td>
            <td>
              <WButton className="medium pill colored">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Hover-fill button</td>
            <td>
              <WButton className="large ghost hover-fill">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Primary Ghost Hover-fill button</td>
            <td>
              <WButton className="large ghost primary hover-fill">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Warning Hover-darken button</td>
            <td>
              <WButton className="large ghost warning hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Accent Ghost Hover-lighten button</td>
            <td>
              <WButton className="ghost accent hover-lighten">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Ghost Success Hover-lighten button</td>
            <td>
              <WButton className="medium ghost success hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Rounded Accent Ghost Hover-fill button</td>
            <td>
              <WButton className="rounded small ghost accent hover-fill">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Accent Hover-darken button</td>
            <td>
              <WButton className=" shadowed primary hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Accent Shadowed Hover-darken button</td>
            <td>
              <WButton className="shadowed large accent hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Danger Shadowed button</td>
            <td>
              <WButton className="shadowed large danger">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Success Shadowed Hover-lighten button</td>
            <td>
              <WButton className="shadowed large success hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Warning Shadowed button</td>
            <td>
              <WButton className="shadowed large warning">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Disabled Ghost Accent button</td>
            <td>
              <WButton className="medium accent ghost disabled">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Transparent Hover-darken button</td>
            <td>
              <WButton className="medium transparent pill hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted button</td>
            <td>
              <WButton className="medium texted">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Primary button</td>
            <td>
              <WButton className="medium texted primary">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Accent button</td>
            <td>
              <WButton className="medium texted accent">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Danger button</td>
            <td>
              <WButton className="medium texted danger">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning button</td>
            <td>
              <WButton className="medium texted warning">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Success Hover-darken button</td>
            <td>
              <WButton className="medium texted success hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Custom Color button</td>
            <td>
              <WButton
                style={{ backgroundColor: "pink" }}
                className="small pill"
              >
                B1
              </WButton>
              <WButton className="small pill red">B2</WButton>
              <WButton className="small pill" style={{ color: "violet" }}>
                B3
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <WButton className="large span">Span Button</WButton>
    </div>
  );
}
