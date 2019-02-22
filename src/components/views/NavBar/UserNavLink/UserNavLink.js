import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthAction } from '../../../../actions/auth.action';

export const UserNavLink = ({ logoutUser, history }) => (
  <>
    <NavLink to="/" activeClassName="active">
      <i className="fa fa-list" /> Menu
    </NavLink>
    <NavLink
      to="null"
      id="log-out"
      onClick={e => {
        e.preventDefault();
        logoutUser(history);
      }}
    >
      <i className="fa fa-sign-out" /> Sign out
    </NavLink>
  </>
);

const mapDispatchToProps = {
  logoutUser: AuthAction.logoutUser,
};

UserNavLink.propTypes = {
  history: PropTypes.func,
  logoutUser: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(UserNavLink));
