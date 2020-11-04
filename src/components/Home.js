import React, { Component } from "react";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import axios from "axios";

class Home extends Component {
  // handleSuccessfulAuth = (data) => {
  //   this.props.handleLogin(data);
  //   this.props.history.push("/dashboard");
  // };

  // handleLogoutClick = () => {
  //   axios
  //     .delete("http://localhost:3001/logout", { withCredentials: true })
  //     .then((resp) => {
  //       this.props.handleLogout();
  //     })
  //     .catch((e) => {
  //       console.log("LOG OUT ERR", e);
  //     });
  // };

  render() {
    console.log("HOME", this.props);
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

export default Home;
