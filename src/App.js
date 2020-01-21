import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import KnowYourCustomer from './containers/KnowYourCustomer';
import AddCard from './containers/AddCard';
import Deposit from './containers/Deposit';
import Transfer from './containers/Transfer';
import Statement from './containers/Statement';

import NotFound from './components/pages/NotFound';
class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row justify-content-md-center">
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props}/>}
          />
          <Route
            exact
            path="/e-kyc"
            render={props => <KnowYourCustomer {...props}/>}
          />
          <Route
            exact
            path="/add-card"
            render={props => <AddCard {...props}/>}
          />
          <Route
            exact
            path="/deposit"
            render={props => <Deposit {...props}/>}
          />
          <Route
            exact
            path="/transfer"
            render={props => <Transfer {...props}/>}
          />
          <Route
            exact
            path="/statement"
            render={props => <Statement {...props}/>}
          />
          <Route
            exact
            path="/not-found"
            render={props => <NotFound {...props}/>}
          />
        </Switch>
      </div>
      </div>
    )
  }
}

export default App;