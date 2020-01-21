import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
const excludeedRoute = [ '/register', '/', '/login'];
class Header extends Component {
  render() {
    const { location } = this.props;
    if(excludeedRoute.indexOf(location.pathname) < 0){
      return (<div className="header col col-sm-12">
        <NavLink to="/add-account" className="header__brand">Payment Wallet</NavLink>
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink to="/deposit" className="header__link">
              Deposit
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/transfer" className="header__link">
              Transfer
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/statements" className="header__link">
              Statement
            </NavLink>
          </li>
        </ul>
      </div>)
    } else {
      return <></>
    }
  }
}

export default withRouter(Header);