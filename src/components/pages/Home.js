import React, { Component } from 'react';
import Card from './../molecules/Card';

class App extends Component {
  onCardClick = () => {
    const { fetchCardDetails } = this.props;
    fetchCardDetails();
  }
  render() {
    const { displayMessage } = this.props;
    return (
      <div>
        <Card onClick={ this.onCardClick } cardDetails={ displayMessage }/>
      </div>
    )
  }
}

export default App;