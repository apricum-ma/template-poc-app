import React, { Component } from "react";
import { Field } from "redux-form";
import { NavLink } from 'react-router-dom';
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Logo from "../../assets/images/logo.png";
class Login extends Component {
  loginHandler = values => {
    const { userLogin } = this.props;
    userLogin(values);
  };

  componentDidUpdate = prevProps => {
    const { updateRoute, history } = this.props;
    if(updateRoute && updateRoute !== prevProps.updateRoute){
      history.push('/add-account');
    }
  }

  render() {
    const { handleSubmit, userVerified } = this.props;
    return (
      <div className="login">
        { userVerified && <div>You have successfully verified yourself</div>}
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
          <NavLink to="/register" className="signup-link">
            Don't have an account yet? Sign up
          </NavLink>
          <Button className="primary-button" disabled={false}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
