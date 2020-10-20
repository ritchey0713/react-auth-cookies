import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      registrationErrors: "",
    };
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        if (resp.data.logged_in) {
          this.props.handleSuccessfulAuth(resp.data);
        }
      })
      .catch((e) => {
        console.log("LOG IN ERR", e);
      });

    e.preventDefault();
    console.log("submitted form!");
    this.setState({
      email: "",
      password: "",
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

          <button type="submit"> Login </button>
        </form>
      </div>
    );
  }
}
