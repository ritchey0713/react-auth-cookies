import React, { Component } from "react";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import axios from "axios";
import { logOut } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  // handleSuccessfulAuth = (data) => {
  //   this.props.handleLogin(data);
  //   this.props.history.push("/dashboard");
  // };

  handleLogoutClick = () => {
    this.props.logOut();
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>
          Status: {this.props.loggedInStatus ? "logged in" : "logged out"}
        </h2>
        <button onClick={() => this.handleLogoutClick()}>Log out</button>
      </div>
    );
  }
}

export default connect(null, { logOut })(Home);
