import React from "react";
import "./examples/example.scss";
import "./main.scss";

import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import WButtonPage from "./examples/WButtonPage";
import WNavbarPage from "./examples/WNavbarPage";
import WInputPage from "./examples/WInputPage";
import WGridPage from "./examples/WGridPage";
import WAccordionPage from "./examples/WAccordionPage";
import WSidebarPage from "./examples/WSidebarPage";
import WLayoutPage from "./examples/WLayoutPage";

import WNavbar from "./components/wnavbar/WNavbar";
import WSidebar from "./components/wsidebar/WSidebar";
import WNavItem from "./components/wnavitem/WNavItem";
import WLayout from "./components/wlayout/WLayout";

export default function App() {
  return (
    <BrowserRouter>
      <WLayout wLayout="header-sidebar-layout">

        <div className="header-l">
          <WNavbar color="colored">
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
              <li className="logo-text">Wolfie Tools</li>
            </ol>

            <ol>
              <WNavItem>
                <a>vAlpha</a>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
                <NavLink to="/about" id="about" activeClassName="transparent">
                  About
              </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
                <a href="https://www.npmjs.com/package/wt-frontend" target="_blank">npm</a>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken" clickAnimation="ripple-light">
                <a href="https://github.com/Cynthia-Lee/wolfie-tools-front-end-api" target="_blank"><i class="fab fa-github" style={{ fontSize: "1.5rem" }} /></a>
              </WNavItem>
            </ol>
          </WNavbar>
        </div>

        <div className="sidebar-l">
          <WSidebar color="clear">
            <ol>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/waccordion" id="waccordion" activeClassName="active-text">
                  WAccordion
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/wbutton" id="wbutton" activeClassName="active-text">
                  WButton
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/wgrid" id="winput" activeClassName="active-text">
                  WGrid
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/winput" id="winput" activeClassName="active-text">
                  WInput
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/wlayout" id="wlayout" activeClassName="active-text">
                  WLayout
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/wnavbar" id="wnavbar" activeClassName="active-text">
                  WNavbar
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="transparent-darken">
                <NavLink to="/wsidebar" id="wsidebar" activeClassName="active-text">
                  WSidebar
                  </NavLink>
              </WNavItem>



            </ol>
          </WSidebar>
        </div>

        <div className="main-l">
          <Switch>
            <Route path="/wbutton" component={WButtonPage} />
            <Route path="/wnavbar" component={WNavbarPage} />
            <Route path="/winput" component={WInputPage} />
            <Route path="/wgrid" component={WGridPage} />
            <Route path="/waccordion" component={WAccordionPage} />
            <Route path="/wsidebar" component={WSidebarPage} />
            <Route path="/wlayout" component={WLayoutPage} />
          </Switch>
        </div>

      </WLayout>

    </BrowserRouter>
  );
}
