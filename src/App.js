import React from "react";
import "./examples/example.css";
import "./main.scss";

import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import WButtonPage from "./examples/WButtonPage";
import WNavbarPage from "./examples/WNavbarPage";
import WInputPage from "./examples/WInputPage";
import WNavbar from "./components/wnavbar/WNavbar";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <WNavbar className={"primary"}>
          <li>
            <NavLink to="/">
              <img
                src="wolfie-tools-logo.png"
                width="40"
                className="logo"
                alt="Logo"
              />
            </NavLink>
            <li> Wolfie Tools</li>
          </li>
          <ol>
            <li className={"hover-darken"}>
              <NavLink to="/wbutton" id="wbutton" activeClassName="primary-dark">
                WButton
                </NavLink>
            </li>
            <li className={"hover-darken"}>
              <NavLink to="/wnavbar" id="wnavbar" activeClassName="primary-dark">
                WNavbar
                </NavLink>
            </li>
            <li className={"hover-darken"}>
              <NavLink to="/winput" id="winput" activeClassName="primary-dark">
                WInput
                </NavLink>
            </li>
          </ol>
        </WNavbar>
        <Switch>
          <Route path="/wbutton" component={WButtonPage} />
          <Route path="/wnavbar" component={WNavbarPage} />
          <Route path="/winput" component={WInputPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
