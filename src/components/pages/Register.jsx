import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Logo from "../../assets/images/logo.png";
class Register extends Component {
  registerUserHandler = values => {
    const { registerUser } = this.props;
    registerUser(values);
  }

  componentDidUpdate = prevProps => {
    const { updateRoute, history, accountNumber } = this.props;
    if(updateRoute && updateRoute !== prevProps.updateRoute){
      console.log(accountNumber);
      history.push('/e-kyc');
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="signup">
        <div className="signup-header">
          <div className="signup-header__logo">
            <img alt="logo" src={Logo} />
          </div>
        </div>
        <form className="signup__form" onSubmit={handleSubmit(this.registerUserHandler)}>
          <Field
            id="firstName"
            component={Input}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <Field
            id="lastName"
            component={Input}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <Field
            id="emailId"
            component={Input}
            type="email"
            name="emailId"
            placeholder="Email ID"
          />
          <Field
            id="phoneNumber"
            component={Input}
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
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
          <Button className="signup__form-button primary-button">
            Register
          </Button>
        </form>
      </div>
    )
  }
}

export default Register;