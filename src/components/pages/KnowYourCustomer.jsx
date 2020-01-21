import React, { Component } from 'react';
import Button from '../atoms/Button';

class KnowYourCustomer extends Component {
  verifyUser = () => {
    this.props.history.push('/add-card');
  }
  render() {
    return <div>
        KnowYourCustomer
        <Button onClick={this.verifyUser}> Complete Verification </Button>
    </div>
  }
}

export default KnowYourCustomer;