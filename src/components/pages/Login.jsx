import React, { Component } from 'react';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
class Login extends Component {
  loginHandler = values => {
    const { userLogin } = this.props;
    userLogin(values);    
  }

  componentDidUpdate = prevProps => {
    const { updateRoute, history, accountNumber } = this.props;
    if(updateRoute && updateRoute !== prevProps.updateRoute){
      console.log(accountNumber);
      history.push('/add-account');
    }
  }

  render() {
    const { handleSubmit, userVerified } = this.props;
    return (
      <div className="login col col-sm-12">
        { userVerified && <div>You have successfully verified yourself</div>}
        <form className="col col-md-3 offset-md-9" onSubmit={handleSubmit(this.loginHandler)}>
          <Field
            id="userName"
            component={Input}
            type="text"
            label="User Name"
            name="userName"
            className="login-field"
            placeholder="Enter your Username"
          />
          <Field
            id="password"
            component={Input}
            type="password"
            label="Password"
            className="login-field"
            name="password"
            placeholder="Enter your Password"
          />
          <div className="login__footer">
            <Button className="login__button">
              Log in
            </Button>
            <span className="login__link-to-register" >
              New User ?
              <NavLink to="/register">
                Register
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;