import React from "react";
import "./examples/example.scss";
import "./main.scss";

import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import AboutPage from "./examples/AboutPage";
import HomePage from "./examples/HomePage";

import WButtonPage from "./examples/WButtonPage";
import WNavbarPage from "./examples/WNavbarPage";
import WInputPage from "./examples/WInputPage";
import WGridPage from "./examples/WGridPage";
import WAccordionPage from "./examples/WAccordionPage";
import WSidebarPage from "./examples/WSidebarPage";
import WLayoutPage from "./examples/WLayoutPage";
import WCardPage from "./examples/WCardPage";
import WModalPage from "./examples/WModalPage";
import WTablePage from './examples/WTablePage';
import WSwitchPage from './examples/WSwitchPage';

import WNavbar from "./components/wnavbar/WNavbar";
import WSidebar from "./components/wsidebar/WSidebar";
import WNavItem from "./components/wnavitem/WNavItem";
import WCard from "./components/wcard/WCard";

import WLayout from "./components/wlayout/WLayout";
import WLHeader from "./components/wlayout/WLHeader";
import WLMain from "./components/wlayout/WLMain";
import WLSide from "./components/wlayout/WLSide";
import WLFooter from "./components/wlayout/WLFooter";

export default function App() {
  return (
    <BrowserRouter>
      <WLayout wLayout="header-lside">

      <WLHeader>
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
              <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
                <NavLink to="/about" id="about" activeClassName="accent">
                  About
              </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
                <a href="https://www.npmjs.com/package/wt-frontend" target="_blank">npm</a>
              </WNavItem>
              <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
                <a href="https://github.com/Cynthia-Lee/wolfie-tools-front-end-api" target="_blank"><i class="fab fa-github" style={{ fontSize: "1.5rem" }} /></a>
              </WNavItem>
            </ol>
          </WNavbar>
        </WLHeader>

        <WLSide side="left">
          <WSidebar color="clear">
            <ol>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/waccordion" id="waccordion" activeClassName="active-text-primary">
                  WAccordion
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wbutton" id="wbutton" activeClassName="active-text-primary">
                  WButton
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wcard" id="wcard" activeClassName="active-text-primary">
                  WCard
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wgrid" id="wgrid" activeClassName="active-text-primary">
                  WGrid
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/winput" id="winput" activeClassName="active-text-primary">
                  WInput
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wlayout" id="wlayout" activeClassName="active-text-primary">
                  WLayout
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wmodal" id="wmodal" activeClassName="active-text-primary">
                  WModal
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wnavbar" id="wnavbar" activeClassName="active-text-primary">
                  WNavbar
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wsidebar" id="wsidebar" activeClassName="active-text-primary">
                  WSidebar
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wtable" id="wtable" activeClassName="active-text-primary">
                  WTable
                  </NavLink>
              </WNavItem>
              <WNavItem hoverAnimation="darken">
                <NavLink to="/wswitch" id="wswitch" activeClassName="active-text-primary">
                  WSwitch
                  </NavLink>
              </WNavItem>



            </ol>
          </WSidebar>
        </WLSide>

        <WLMain>
          <Switch>
            <Route exact path ="/" component={HomePage} />
            <Route path ="/about" component={AboutPage} />
            <Route path="/wbutton" component={WButtonPage} />
            <Route path="/wnavbar" component={WNavbarPage} />
            <Route path="/winput" component={WInputPage} />
            <Route path="/wgrid" component={WGridPage} />
            <Route path="/waccordion" component={WAccordionPage} />
            <Route path="/wsidebar" component={WSidebarPage} />
            <Route path="/wlayout" component={WLayoutPage} />
            <Route path="/wcard" component={WCardPage} />
            <Route path="/wmodal" component={WModalPage} />
            <Route path="/wtable" component={WTablePage} />
            <Route path="/wswitch" component={WSwitchPage} />
          </Switch>
        </WLMain>

      </WLayout>

    </BrowserRouter>
  );
}
