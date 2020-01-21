import React, { Component } from 'react';
import Button from '../atoms/Button';
import Card from '../molecules/Card';

class AddCard extends Component {
  state = {
    showDefaultCard: false
  }
  addCard = () => {
    this.setState({ showDefaultCard: true });
  }

  saveCard = () => {
    this.setState({ showDefaultCard: false });
  }
  render() {
    const { showDefaultCard } = this.state;
    return <div>
        AddCard
        <Button onClick={this.addCard}> Add Card </Button>
        { showDefaultCard && <Card onClick={this.saveCard}/>}
    </div>
  }
}

export default AddCard;