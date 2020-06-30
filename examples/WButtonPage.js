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
      <h1>WButton</h1>
      <table>
        <tbody>
          <tr>
            <td>Primary Small Hover-darken</td>
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
            <td>Primary Raised Hover-lighten</td>
            <td>
              <WButton className="raised primary hover-lighten">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Accent Raised Hover-darken</td>
            <td>
              <WButton className="raised large accent hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Danger Raised</td>
            <td>
              <WButton className="raised large danger">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Success Raised Hover-lighten</td>
            <td>
              <WButton className="raised large success hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Warning Raised</td>
            <td>
              <WButton className="raised large warning">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Colored Warning Raised</td>
            <td>
              <WButton className="raised large colored">Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Disabled Texted</td>
            <td>
              <WButton className="accent texted hover-darken disabled">
                <i class="material-icons">favorite</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Ghost Primary Rounded Hover-ghost-darken Ripple-light</td>
            <td>
              <WButton className="ghost primary rounded hover-ghost-darken ripple-light">
                <i class="material-icons medium left">thumb_up</i>
                Like
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Ghost Danger Rounded Hover-ghost-darken Ripple-dark</td>
            <td>
              <WButton className="ghost danger rounded hover-ghost-darken ripple-dark">
                <i class="material-icons medium left">favorite</i>
                Button
                <i class="material-icons medium right">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Success Pill Hover-lighten Ripple-light</td>
            <td>
              <WButton className="success hover-lighten pill ripple-light">
                <i class="material-icons small">check</i>
                <i class="material-icons large">shopping_cart</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Icon Circle Accent Hover-darken</td>
            <td>
              <WButton className="accent hover-darken circle">
                <i class="material-icons small">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Icon Circle Hover-ligthen</td>
            <td>
              <WButton className="accent hover-lighten circle">
                <i class="material-icons medium">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Raised Icon Circle Hover-darken</td>
            <td>
              <WButton className="accent raised hover-darken circle">
                <i class="material-icons large">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Icon Raised Square Primary</td>
            <td>
              <WButton className="primary raised square">
                <i class="material-icons small">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Icon Square Primary Hover-lighten</td>
            <td>
              <WButton className="primary hover-lighten square">
                <i class="material-icons medium">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Icon Square Hover-darken</td>
            <td>
              <WButton className="primary hover-darken square">
                <i class="material-icons large">verified</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Medium Pill Colored</td>
            <td>
              <WButton className="medium pill colored">Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Large Ghost Colored Hover-lighten</td>
            <td>
              <WButton className="large ghost colored hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Colored Hover-darken</td>
            <td>
              <WButton className="large ghost colored hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Primary Ghost Hover-fill</td>
            <td>
              <WButton className="large ghost primary hover-fill">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Warning Hover-transparent-darken</td>
            <td>
              <WButton className="large ghost warning hover-transparent-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Warning Hover-darken</td>
            <td>
              <WButton className="large ghost warning hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Accent Ghost Hover-lighten</td>
            <td>
              <WButton className="ghost accent hover-lighten">Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Rounded Ghost Success Hover-darken</td>
            <td>
              <WButton className="medium rounded ghost success hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Rounded Danger Ghost Hover-fill</td>
            <td>
              <WButton className="rounded small ghost danger hover-fill">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Disabled Ghost</td>
            <td>
              <WButton className="medium accent ghost disabled">Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Transparent Pill Hover-darken</td>
            <td>
              <WButton className="medium transparent pill hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Transparent Pill Hover-lighten</td>
            <td>
              <WButton className="medium transparent pill hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Disabled Transparent Pilln</td>
            <td>
              <WButton className="medium disabled transparent pill hover-darken">
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Texted Colored Hover-darken</td>
            <td>
              <WButton className="colored medium texted hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Primary Hover-darken</td>
            <td>
              <WButton className="medium texted primary hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Accent Hover-darken</td>
            <td>
              <WButton className="medium texted accent hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Danger Hover-darken</td>
            <td>
              <WButton className="medium texted danger hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning Hover-lighten </td>
            <td>
              <WButton className="medium texted warning hover-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning Hover-transparent-lighten </td>
            <td>
              <WButton className="medium texted warning hover-transparent-lighten">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning Hover-darken </td>
            <td>
              <WButton className="medium texted warning hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Success Hover-darken</td>
            <td>
              <WButton className="medium texted success hover-darken">
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Disabled</td>
            <td>
              <WButton className="medium texted disabled hover-darken">
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Custom Colors</td>
            <td>
              <WButton
                style={{ backgroundColor: "violet" }}
                className="small pill ripple-light"
              >
                B1
              </WButton>
              <WButton className="small pill red-green ripple-light">
                B2
              </WButton>
              <WButton
                className="small pill ripple-dark"
                style={{ color: "violet" }}
              >
                B3
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <WButton className="large warning span ripple-dark">
        Span Button
        <i class="material-icons right">anchor</i>
      </WButton>
    </div>
  );
}
