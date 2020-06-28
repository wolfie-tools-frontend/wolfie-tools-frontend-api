import React from "react";
import WButton from "../src/components/wbutton/WButton";
import WNavbar from "../src/components/wnavbar/WNavbar";
import "./example.css";
import "../src/main.scss";

export default function WButtonPage() {
  return (
    <div className="WNavbarPage">
      <WNavbar>
        <a href="#">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </WNavbar>
      <h1>Buttons</h1>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}
