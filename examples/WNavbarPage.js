import React from "react";
import WButton from "../src/components/wbutton/WButton";
import WNavbar from "../src/components/wnavbar/WNavbar";
import "./example.css";
import "../src/main.scss";

export default function WButtonPage() {
  return (
    <div className="WNavbarPage">
      <h1>WNavbar</h1>
      <WNavbar>
        <a href="#" class="hover-transparent-lighten">
          Logo
        </a>
        <ul id="nav-mobile" class="hide-on-med-and-down">
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
        </ul>
      </WNavbar>
      <WNavbar>
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li>
            <a href="#" class="hover-transparent-lighten">
              Logo
            </a>
          </li>
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
      </WNavbar>
      <WNavbar>
        <a href="#" class="hover-transparent-lighten">
          Logo
        </a>
        <ul id="nav-mobile" class="hide-on-med-and-down">
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
    </div>
  );
}
