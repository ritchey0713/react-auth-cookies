import React, { Component } from "react";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((resp) => {
        this.props.handleLogout();
      })
      .catch((e) => {
        console.log("LOG OUT ERR", e);
      });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
        <button onClick={() => this.handleLogoutClick()}>Log out</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

export default Home;
