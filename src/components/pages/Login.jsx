import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
class Login extends Component {
  loginHandler = values => {
    const { userLogin } = this.props;
    userLogin(values);
    this.props.history.push('/add-card');
    
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login col col-sm-12">
        <form className="col col-lg-6 align-self-end" onSubmit={handleSubmit(this.loginHandler)}>
          <Field
            id="userName"
            component={Input}
            type="text"
            label="User Name"
            name="userName"
            placeholder="Enter your Username"
          />
          <Field
            id="password"
            component={Input}
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your Password"
          />
          <Button>
            Log in
          </Button>
        </form>
      </div>
    )
  }
}

export default Login;