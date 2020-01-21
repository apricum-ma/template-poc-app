import React, { Component } from 'react';
import Button from '../atoms/Button';
import UserCard from '../molecules/UserCard';

class AddAccount extends Component {
  state = {
    showDefaultCard: false
  }
  addAccount = () => {
    this.setState({ showDefaultCard: true });
  }

  saveCard = () => {
    this.setState({ showDefaultCard: false });
  }
  render() {
    const { showDefaultCard } = this.state;
    return <div>
        Add Account
        <Button onClick={this.addAccount}> Add Account </Button>
        { showDefaultCard && <UserCard onClick={this.saveCard}/>}
    </div>
  }
}

export default AddAccount;