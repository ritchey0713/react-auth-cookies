import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      registrationErrors: "",
    };
  }

  handleSubmit = (e) => {
    const { email, password, passwordConfirmation } = this.state;
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        if (resp.data.status === "created") {
          this.props.handleSuccessfulAuth(resp.data);
        }
      })
      .catch((e) => {
        console.log("ERR", e);
      });

    e.preventDefault();
    console.log("submitted form!");
    this.setState({
      email: "",
      password: "",
      passwordConfirmation: "",
      registrationErrors: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="password confirmation"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit"> create user </button>
        </form>
      </div>
    );
  }
}
