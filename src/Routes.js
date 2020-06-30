import React from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import WButtonPage from "../examples/WButtonPage";
import WNavbarPage from "../examples/WNavbarPage";
import WNavbar from "./components/wnavbar/WNavbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <WNavbar>
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
          <ol>
            <li>
              <a href="/wbutton" class="hover-darken">
                WButton
              </a>
            </li>
            <li>
              <a href="/wnavbar" class="hover-darken">
                WNavbar
              </a>
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
};

export default Routes;
