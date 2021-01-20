import React from "react";
import WButton from "../components/wbutton/WButton";
import WNavbar from "../components/wnavbar/WNavbar";
import WNavItem from "../components/wnavitem/WNavItem";
//import WInput from "../components/winput/WInput";
import WAccordion from "../components/waccordion/WAccordion";
import "./example.scss";
import "../main.scss";

export default function WNavbarPage() {
  return (
    <div className="WNavbarPage">
      <h1>WNavbar</h1>
      <WNavbar color="accent">
        <ul>
          <li className="hover-transparent-darken">
            <a href="https://lypzl.csb.app/">Logo</a>
          </li>
        </ul>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li className="hover-transparent-darken">
            <a href="#">About Me</a>
          </li>
          <li className="hover-transparent-darken ripple-dark">
            <a href="#">Resume</a>
          </li>
          <li className="hover-transparent-darken ripple-dark">
            <a href="#">Contact</a>
          </li>
        </ul>
      </WNavbar>

      <WNavbar className="warning">
        <ul>
          <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
            <a href="https://lypzl.csb.app/">Logo</a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
            <a href="#">About Me</a>
          </WNavItem>
          <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
            <a href="#">Resume</a>
          </WNavItem>
          <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
            <a href="#">Contact</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar className="colored">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li className="hover-transparent-lighten">
            <a href="#">Logo</a>
          </li>
          <li className="hover-transparent-lighten">
            <a href="#">Sass</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Components</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">JavaScript</a>
          </li>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#142850" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Logo</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Home</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Documentation</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Examples</a>
          </li>
        </ul>
        <ul>
          <li>
            <input
              type="text"
              id="name"
              name="name"
              size="20"
              placeholder="Search"
            />
          </li>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#142850" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Logo</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Home</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Documentation</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Examples</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-github fa-lg" />
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-lg" />
            </a>
            <a href="#">
              <i class="fab fa-slack fa-lg" />
            </a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Download</a>
          </li>
        </ul>
      </WNavbar>

      <WNavbar className="transparent-dark-color">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li className="hover-transparent-darken">
            <a href="#">Hot</a>
          </li>
          <li className="hover-transparent-darken">
            <a href="#">New</a>
          </li>
          <li className="hover-transparent-darken">
            <a href="#">Rising</a>
          </li>
          <li className="hover-transparent-darken">
            <a href="#">Controversial</a>
          </li>
          <li className="hover-transparent-darken">
            <a href="#">Top</a>
          </li>
          <li className="hover-transparent-darken">
            <a href="#">Wiki</a>
          </li>
          <li className="hover-transparent-darken">
            <a href="#">Show Images</a>
          </li>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#660000" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down mckilla-nav">
          <li>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/teaching.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Teaching
            </a>
          </li>
          <li>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/research.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Research
            </a>
          </li>
          <li>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/games.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Games
            </a>
          </li>
          <li>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/mosaic.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Mosaic
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.stonybrook.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                src="wolfie-tools-logo.png"
                width="40"
                className="logo"
                alt="Logo"
              />
            </a>
            <li>
              <a
                href="https://www.stonybrook.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                style={{ fontSize: "1.5rem", fontFamily: "Times New Roman" }}
              >
                Richard McKenna
              </a>
            </li>
          </li>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "gray" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Home</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Teaching</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Research</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">CV</a>
          </li>
          <li className="hover-transparent-lighten click-ripple-light">
            <a href="#">Games</a>
          </li>
          <li className="click-ripple-light hover-text-primary">
            <a href="#">Mosaic</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">
              <img
                src="wolfie-tools-logo.png"
                width="40"
                className="logo"
                alt="Logo"
              />
            </a>
            Wolfie Tools
          </li>
        </ul>
      </WNavbar>

      <WAccordion header="Accordion #1"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna non leo faucibus pretium nec eget purus. Nam ornare libero nec mi ultrices, at pretium orci auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In aliquet dapibus cursus. Praesent sed nisi eget mi tempus finibus a vel dui. Donec tempus elit vestibulum, luctus ex at, ullamcorper justo. Sed aliquet, metus id cursus convallis, sapien erat congue ante, non malesuada urna sapien ut turpis. In hac habitasse platea dictumst. Morbi maximus elementum felis, et semper erat tempor a. Nulla facilisi. Proin lacinia turpis lectus, at convallis purus malesuada vel. Curabitur ut suscipit dolor.">
      </WAccordion>
    </div>
  );
}
