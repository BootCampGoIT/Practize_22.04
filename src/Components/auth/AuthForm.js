import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loginOperation,
  registrationOperation,
} from "../../redux/auth/authOperations";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.isRegistrationForm()
      ? this.props.registrationOperation({ email, password })
      : this.props.loginOperation({ email, password });
  };

  isRegistrationForm = () => {
    return this.props.location.pathname === "/registration"; //true
  };

  render() {
    return (
      <>
        <h2>
          Please,
          {this.isRegistrationForm() ? "register" : "login"}!
        </h2>
        <form onSubmit={this.onHandleSubmit}>
          {/* {this.isRegistrationForm() && (
            <label>
              Name:
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.onHandleChange}
              />
            </label>
          )} */}
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Password:
            <input
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.onHandleChange}
            />
          </label>
          <button type='submit'>
            {this.isRegistrationForm() ? "register" : "login"}
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { registrationOperation, loginOperation })(
  withRouter(AuthForm)
);
