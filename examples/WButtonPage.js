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
            <td>Default Ripple-light button</td>
            <td>
              <WButton className="ripple-light">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Ghost danger rounded hover-ghost-darken ripple-light button</td>
            <td>
              <WButton className="ghost primary rounded hover-ghost-darken ripple-light">
                <i class="material-icons medium left">thumb_up</i>
                Like
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Ghost danger rounded hover-ghost-darken ripple-dark button</td>
            <td>
              <WButton className="ghost danger rounded hover-ghost-darken ripple-dark">
                <i class="material-icons medium left">favorite</i>
                Button
                <i class="material-icons medium right">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Default Hover-darken button</td>
            <td>
              <WButton className="hover-darken">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Disabled Hover-lighten ghost button</td>
            <td>
              <WButton className="disabled medium hover-lighten">
                Button
              </WButton>
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
            <td>Accent Icon Hover-lighten button</td>
            <td>
              <WButton className="accent hover-lighten">
                <i class="material-icons small">verified</i>
                <i class="material-icons large">shopping_cart</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Accent Hover-darken button</td>
            <td>
              <WButton className="raised primary hover-darken">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Accent Raised Hover-darken button</td>
            <td>
              <WButton className="raised large accent hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Danger Raised button</td>
            <td>
              <WButton className="raised large danger">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Success Raised Hover-lighten button</td>
            <td>
              <WButton className="raised large success hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Warning Raised button</td>
            <td>
              <WButton className="raised large warning">Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Disabled Texted Icon Hover-darken button</td>
            <td>
              <WButton className="accent texted hover-darken disabled">
                <i class="material-icons">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>1 Texted Icon Hover-darken button</td>
            <td>
              <WButton className="accent hover-darken circle">
                <i class="material-icons small">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>2 Texted Icon Hover-darken button</td>
            <td>
              <WButton className="accent hover-darken circle">
                <i class="material-icons medium">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>3 Texted Icon Hover-darken button</td>
            <td>
              <WButton className="accent hover-darken circle">
                <i class="material-icons large">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>1 Texted Icon Hover-darken button</td>
            <td>
              <WButton className="primary hover-darken square">
                <i class="material-icons small">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>2 Texted Icon Hover-darken button</td>
            <td>
              <WButton className="primary hover-darken square">
                <i class="material-icons medium">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>3 Texted Icon Hover-darken button</td>
            <td>
              <WButton className="primary hover-darken square">
                <i class="material-icons large">verified</i>
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
            <td>Large Ghost Hover-tl button</td>
            <td>
              <WButton className="large ghost hover-lighten">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Hover-td button</td>
            <td>
              <WButton className="large ghost hover-darken">Button</WButton>
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
            <td>TEST Large Ghost Warning Hover-tl button</td>
            <td>
              <WButton className="large ghost warning hover-transparent-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Warning Hover-td button</td>
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
            <td>Medium Rounded Ghost Success Hover-lighten button</td>
            <td>
              <WButton className="medium rounded ghost success hover-lighten">
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
            <td>Transparent Hover-lighten button</td>
            <td>
              <WButton className="medium transparent pill hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Disabled Transparent Hover-darken button</td>
            <td>
              <WButton className="medium disabled transparent pill hover-darken">
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
              <WButton className="medium texted warning hover-transparent-lighten">
                Button
              </WButton>
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
            <td>Texted Disabled Hover-darken button</td>
            <td>
              <WButton className="medium texted disabled hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Custom Color button</td>
            <td>
              <WButton
                style={{ backgroundColor: "violet" }}
                className="small pill"
              >
                B1
              </WButton>
              <WButton className="small pill red-green">B2</WButton>
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
