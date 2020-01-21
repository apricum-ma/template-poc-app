import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
class Home extends Component {
  registerUser = () => {
    this.props.history.push('/e-kyc');
  }
  render() {
    return (
      <div className="col col-lg-2">
        <Field
          id="firstName"
          component={Input}
          type="text"
          label="First Name"
          name="firstName"
          input={{
            defaultValue:'XYZ'
          }}
          placeholder="Enter your First Name"
        />
        <Field
          id="lastName"
          component={Input}
          type="text"
          label="Last Name"
          name="firstName"
          input={{
            defaultValue:'XYZ'
          }}
          placeholder="Enter your Last Name"
        />
        <Field
          id="emailId"
          component={Input}
          type="email"
          label="Email"
          name="mail"
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
        <Button onClick={this.registerUser}>
          Register
        </Button>
      </div>
    )
  }
}

export default Home;