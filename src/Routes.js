import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import WButtonPage from "../examples/WButtonPage";
import WNavbarPage from "../examples/WNavbarPage";
import WNavbar from "./components/wnavbar/WNavbar";

class Routes extends React.Component {
  state = {
    activeLink: ""
  };

  showActive = e => {
    this.setState({ activeLink: e.target.id });
  };

  render() {
    return (
      <>
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
                <li> Wolfie Tools</li>
              </li>
              <ol>
                <li
                  className={
                    this.state.activeLink === "wbutton"
                      ? "show-current-dark"
                      : "hover-darken"
                  }
                >
                  <a
                    href="/wbutton"
                    id="wbutton"
                    onClick={e => this.showActive(e)}
                  >
                    WButton
                  </a>
                </li>
                <li
                  className={
                    this.state.activeLink === "wnavbar"
                      ? "show-current-dark"
                      : "hover-darken"
                  }
                >
                  <a
                    href="/wnavbar"
                    id="wnavbar"
                    onClick={e => this.showActive(e)}
                  >
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
      </>
    );
  }
}

export default Routes;
