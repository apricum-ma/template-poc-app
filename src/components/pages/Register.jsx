import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
class Home extends Component {
  registerUserHandler = values => {
    const { registerUser } = this.props;
    registerUser(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="col">
        <form onSubmit={handleSubmit(this.registerUserHandler)}>
          <Field
            id="firstName"
            component={Input}
            type="text"
            label="First Name"
            name="firstName"
            placeholder="Enter your First Name"
          />
          <Field
            id="lastName"
            component={Input}
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Enter your Last Name"
          />
          <Field
            id="emailId"
            component={Input}
            type="email"
            label="Email"
            name="emailId"
            placeholder="Enter your Email ID"
          />
          <Field
            id="phoneNumber"
            component={Input}
            type="text"
            label="Phone Number"
            name="phone"
            placeholder="Enter your Phone Number"
          />
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
            Register
          </Button>
        </form>
      </div>
    )
  }
}

export default Home;