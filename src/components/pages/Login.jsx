import React, { Component } from "react";
import { Field } from "redux-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Logo from "../../assets/images/logo.png";
class Login extends Component {
  loginHandler = values => {
    const { userLogin } = this.props;
    userLogin(values);
    this.props.history.push("/add-card");
  };

  render() {
    const { handleSubmit, userVerified } = this.props;
    return (
      <div className="login">
        <div className="login-header">
          <div className="login-header__logo">
            <img alt="logo" src={Logo} />
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit(this.loginHandler)}>
          <Field
            id="userName"
            component={Input}
            type="text"
            name="userName"
            placeholder="Username"
          />
          <Field
            id="password"
            component={Input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <a href="" className="signup-link">
            Don't have an account yet? Sign up
          </a>
          <Button className="primary-button" disabled={false}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
