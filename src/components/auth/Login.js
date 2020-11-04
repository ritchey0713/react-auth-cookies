import React, { Component } from "react";
import axios from "axios";
import { logIn } from "../../actions";
import { connect } from "react-redux";

class Login extends Component {
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
    this.props.logIn(this.state);
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

export default connect(null, { logIn })(Login);
