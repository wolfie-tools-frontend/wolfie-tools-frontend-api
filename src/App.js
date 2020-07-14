import React from "react";
import "./examples/example.css";
import "./main.scss";

import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import WButtonPage from "./examples/WButtonPage";
import WNavbarPage from "./examples/WNavbarPage";
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
                <NavLink to="/wbutton" id="wbutton" activeClassName="accent">
                  WButton
                </NavLink>
              </li>
              <li className={"hover-darken"}>
                <NavLink to="/wnavbar" id="wnavbar" activeClassName="accent">
                  WNavbar
                </NavLink>
              </li>
            </ol>
          </WNavbar>
          <Switch>
            <Route path="/wbutton" component={WButtonPage} />
            <Route path="/wnavbar" component={WNavbarPage} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}
