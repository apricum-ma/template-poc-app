import React, { Component } from 'react';
import Button from '../atoms/Button';
import { Field } from 'redux-form';
import Input from '../atoms/Input';

class AddAccount extends Component {
  addAccountHandler = values => {
    const { addAccount, token, custNumber } = this.props;
    const req = {
      reqBody: values,
      token
    }
    req.reqBody.custNumber = custNumber;
    addAccount(req);
  }

  render() {
    const { handleSubmit } = this.props;
    return <div>
        Add Account
        <form className="register__form col col-md-6 offset-md-6" onSubmit={handleSubmit(this.addAccountHandler)}>
          <Field
            id="cardNumber"
            component={Input}
            type="text"
            label="Card Number"
            name="cardNumber"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter your Card number"
          />
          <Field
            id="bankcode"
            component={Input}
            type="text"
            label="Bank Code"
            name="bankCode"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter the bank code"
          />
          <Field
            id="otherAccountNumber"
            component={Input}
            type="text"
            label="Other Account Number"
            name="otherAccountNumber"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter other Account Number"
          />
          <Field
            id="otherBankCode"
            component={Input}
            type="text"
            label="Other Bank Code"
            name="otherBankCode"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter other Bank Code"
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
            id="otherBankName"
            component={Input}
            type="text"
            label="Other Bank Name"
            name="otherBankName"
            className="register-field col-md-6 col-lg-6"
            placeholder="Enter other Bank Name"
          />
          <Button onClick={this.addAccountHandler}>
            Add Account
          </Button>
        </form>
    </div>
  }
}

export default AddAccount;