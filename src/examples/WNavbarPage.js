import React from "react";
import WButton from "../components/wbutton/WButton";
import WNavbar from "../components/wnavbar/WNavbar";
import WNavItem from "../components/wnavitem/WNavItem";
//import WInput from "../components/winput/WInput";
import "./example.scss";
import "../main.scss";

export default function WNavbarPage() {
  return (
    <div className="WNavbarPage">
      <h1>WNavbar</h1>
      <h2>Without WNavItem</h2>
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

      <h2>With WNavItem</h2>
      <WNavbar color="warning">
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

      <WNavbar color="colored">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <WNavItem className="hover-transparent-lighten">
            <a href="#">Logo</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten">
            <a href="#">Sass</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Components</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">JavaScript</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#142850" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Logo</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Home</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Documentation</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Examples</a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem>
            <input
              type="text"
              id="name"
              name="name"
              size="20"
              placeholder="Search"
            />
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#142850" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Logo</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Home</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Documentation</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Examples</a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem>
            <a href="#">
              <i class="fab fa-github fa-lg" />
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-lg" />
            </a>
            <a href="#">
              <i class="fab fa-slack fa-lg" />
            </a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Download</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar color="transparent">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <WNavItem className="hover-transparent-darken">
            <a href="#">Hot</a>
          </WNavItem>
          <WNavItem className="hover-transparent-darken">
            <a href="#">New</a>
          </WNavItem>
          <WNavItem className="hover-transparent-darken">
            <a href="#">Rising</a>
          </WNavItem>
          <WNavItem className="hover-transparent-darken">
            <a href="#">Controversial</a>
          </WNavItem>
          <WNavItem className="hover-transparent-darken">
            <a href="#">Top</a>
          </WNavItem>
          <WNavItem className="hover-transparent-darken">
            <a href="#">Wiki</a>
          </WNavItem>
          <WNavItem className="hover-transparent-darken">
            <a href="#">Show Images</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#660000" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down mckilla-nav">
          <WNavItem>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Home
            </a>
          </WNavItem>
          <WNavItem>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/teaching.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Teaching
            </a>
          </WNavItem>
          <WNavItem>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/research.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Research
            </a>
          </WNavItem>
          <WNavItem>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              CV
            </a>
          </WNavItem>
          <WNavItem>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/games.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Games
            </a>
          </WNavItem>
          <WNavItem>
            <a
              href="https://www3.cs.stonybrook.edu/~richard/mosaic.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mckilla"
            >
              Mosaic
            </a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem>
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
            <WNavItem>
              <a
                href="https://www.stonybrook.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                style={{ fontSize: "1.5rem", fontFamily: "Times New Roman" }}
              >
                Richard McKenna
              </a>
            </WNavItem>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "gray" }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Home</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Teaching</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Research</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">CV</a>
          </WNavItem>
          <WNavItem className="hover-transparent-lighten click-ripple-light">
            <a href="#">Games</a>
          </WNavItem>
          <WNavItem className="click-ripple-light hover-text-primary">
            <a href="#">Mosaic</a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem>
            <a href="/">
              <img
                src="wolfie-tools-logo.png"
                width="40"
                className="logo"
                alt="Logo"
              />
            </a>
            Wolfie Tools
          </WNavItem>
        </ul>
      </WNavbar>

     
    </div>
  );
}
