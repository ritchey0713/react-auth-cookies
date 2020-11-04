import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkLoggedInStatus } from "../actions/index";
import Dashboard from "./Dashboard.js";
import Login from "../components/auth/Login";
import Home from "./Home";
import Registration from "./auth/Registration.js";

class App extends Component {
  componentDidMount() {
    this.props.checkLoggedInStatus();
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/new_user" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} loggedInStatus={this.props.loggedInStatus} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

{
  /* <Route
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
            /> */
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.currentUser,
    loggedInStatus: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { checkLoggedInStatus })(App);
