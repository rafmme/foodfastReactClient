import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import NameAvatar from './NameAvatar';
import { nameAvatar } from './NameAvatar.css';
import AuthAction from '../actions/authActions';
import AuthService from '../utils/Auth';

const CustomerNavLink = ({ currentUser, logoutUser }) => (
  <>
    <NavLink to="/menu" activeClassName="active">
      <i className="fa fa-list" /> Menu
    </NavLink>
    <NavLink to="/orders" activeClassName="active">
      <i className="fa fa-money" /> My Orders
    </NavLink>
    <NavLink to="/infopage" activeClassName="active">
      <i className="fa fa-info-circle" /> About Us
    </NavLink>
    <NavLink
      to="null"
      onClick={e => {
        e.preventDefault();
        logoutUser();
      }}
    >
      <i className="fa fa-sign-out" /> Sign out
    </NavLink>
    <Link to="null" className={nameAvatar} onClick={e => e.preventDefault()}>
      <NameAvatar fullname={currentUser || AuthService.getCurrentUser().email} />
    </Link>
  </>
);

const mapStateToProps = state => ({ currentUser: state.authReducer.currentUser });

const mapDispatchToProps = {
  logoutUser: AuthAction.logoutUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerNavLink);
