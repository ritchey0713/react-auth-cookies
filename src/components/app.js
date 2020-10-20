import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Dashboard from "./Dashboard.js";
import Home from "./Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };

  handleLogout = () => {
    this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
  };

  checkLoggedInStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", {
        withCredentials: true,
      })
      .then((resp) => {
        if (
          resp.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: resp.data.user,
          });
        } else if (
          !resp.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
        }
      })
      .catch((e) => {
        "logged in? error", e;
      });
  };

  componentDidMount() {
    this.checkLoggedInStatus();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogout={this.handleLogout}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
