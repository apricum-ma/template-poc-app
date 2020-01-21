import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
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
      <div className="register col col-sm-12">
        <form className="register__form col col-md-6 offset-md-6" onSubmit={handleSubmit(this.registerUserHandler)}>
          <Field
            id="firstName"
            component={Input}
            type="text"
            label="First Name"
            name="firstName"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your First Name"
          />
          <Field
            id="lastName"
            component={Input}
            type="text"
            label="Last Name"
            name="lastName"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your Last Name"
          />
          <Field
            id="emailId"
            component={Input}
            type="email"
            label="Email"
            name="emailId"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your Email ID"
          />
          <Field
            id="phoneNumber"
            component={Input}
            type="text"
            label="Phone Number"
            name="phone"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your Phone Number"
          />
          <Field
            id="userName"
            component={Input}
            type="text"
            label="User Name"
            name="userName"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your Username"
          />
          <Field
            id="password"
            component={Input}
            type="password"
            label="Password"
            name="password"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your Password"
          />
          <Button>
            Register
          </Button>
        </form>
      </div>
    )
  }
}

export default Register;