import React from "react";
import WButton from "../src/components/wbutton/WButton";
import WNavbar from "../src/components/wnavbar/WNavbar";
import "./example.css";
import "../src/main.scss";

export default function WButtonPage() {
  return (
    <div className="WNavbarPage">
      <h1>Navbars</h1>

      <WNavbar>
        <a href="#" class="hover-transparent-lighten">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html" class="hover-transparent-darken">
              Sass
            </a>
          </li>
          <li>
            <a href="badges.html" class="ripple-dark">
              Components
            </a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
        <a href="#" class="hover-darken">
          aaaa
        </a>
        <div class="hover-darken">other</div>
      </WNavbar>

      <table>
        <tbody>
          <tr>
            <td>A </td>
            <td>
              <WButton className="accent circle" />
            </td>
          </tr>
          <tr>
            <td>B </td>
            <td>
              <WButton className="accent circle" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <WButton className="primary square" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <WButton className="primary square" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <WButton className="primary square" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
