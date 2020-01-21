import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './containers/Register';
import KnowYourCustomer from './containers/KnowYourCustomer';
import AddAccount from './containers/AddAccount';
import Deposit from './containers/Deposit';
import Transfer from './containers/Transfer';
import Statement from './containers/Statement';
import Error from './components/pages/Error';
import Header from './components/molecules/Header';
import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <Header/>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login {...props}/>}
          />
          <Route
            exact
            path="/register"
            render={props => <Register {...props}/>}
          />
          <Route
            exact
            path="/e-kyc"
            render={props => <KnowYourCustomer {...props}/>}
          />
          <Route
            exact
            path="/add-account"
            render={props => <AddAccount {...props}/>}
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
            path="/error"
            render={props => <Error {...props}/>}
          />
        </Switch>
      </div>
      </div>
    )
  }
}

export default App;