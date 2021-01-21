import React from "react";
import "./examples/example.scss";
import "./main.scss";

import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import WButtonPage from "./examples/WButtonPage";
import WNavbarPage from "./examples/WNavbarPage";
import WInputPage from "./examples/WInputPage";
import WGridPage from "./examples/WGridPage";
import WAccordionPage from "./examples/WAccordionPage";
import WNavbar from "./components/wnavbar/WNavbar";
import WRow from "./components/wgrid/WRow";
import WCol from "./components/wgrid/WCol";
import WSidebar from "./components/wsidebar/WSidebar";
import WNavItem from "./components/wnavitem/WNavItem";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <WNavbar className={"primary"}>
          <ol>
            <li>
              <NavLink to="/">
                <img
                  src="wolfie-tools-logo.png"
                  width="40"
                  className="logo"
                  alt="Logo"
                />
              </NavLink>
            </li>
            <li>Wolfie Tools</li>
          </ol>

          <ol>
            <WNavItem>
              vAlpha
            </WNavItem>
            <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
              <a href="https://www.npmjs.com/package/wolfie-tools-front-end-api" target="_blank">npm</a>
            </WNavItem>
            <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
              <NavLink to="/about" id="about" activeClassName="transparent">
                About
              </NavLink>
            </WNavItem>
            <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
              <a href="https://github.com/Cynthia-Lee/wolfie-tools-front-end-api" target="_blank"><i class="fab fa-github" style={{ fontSize: "1.5rem" }} /></a>
            </WNavItem>
          </ol>
        </WNavbar>

        <WRow style={{ columnGap: '0' }}>
          <WCol size='2' style={{ margin: '0' }}>
            <WSidebar color="transparent-dark-color">
              <ol>
                <WNavItem hoverAnimation="transparent-darken">
                  <NavLink to="/waccordion" id="waccordion" activeClassName="transparent">
                    WAccordion
                  </NavLink>
                </WNavItem>
                <WNavItem hoverAnimation="transparent-darken">
                  <NavLink to="/wbutton" id="wbutton" activeClassName="transparent">
                    WButton
                  </NavLink>
                </WNavItem>
                <WNavItem hoverAnimation="transparent-darken">
                  <NavLink to="/wgrid" id="winput" activeClassName="transparent">
                    WGrid
                  </NavLink>
                </WNavItem>
                <WNavItem hoverAnimation="transparent-darken">
                  <NavLink to="/winput" id="winput" activeClassName="transparent">
                    WInput
                  </NavLink>
                </WNavItem>
                <WNavItem hoverAnimation="transparent-darken">
                  <NavLink to="/wnavbar" id="wnavbar" activeClassName="transparent">
                    WNavbar
                  </NavLink>
                </WNavItem>

              </ol>
            </WSidebar>
          </WCol>

          <WCol size='10'>
            <div className="container">
              <Switch>
                <Route path="/wbutton" component={WButtonPage} />
                <Route path="/wnavbar" component={WNavbarPage} />
                <Route path="/winput" component={WInputPage} />
                <Route path="/wgrid" component={WGridPage} />
                <Route path="/waccordion" component={WAccordionPage} />
              </Switch>
            </div>
          </WCol>

        </WRow>

      </div>

    </BrowserRouter>
  );
}
