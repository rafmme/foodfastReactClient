import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthAction } from '../../../../actions/auth.action';

export const AdminNavLink = ({ logoutUser, history }) => (
  <>
    <NavLink id="current-user" to="null" className="no-link" onClick={e => e.preventDefault()}>
      <i className="fa fa-user" /> Admin
    </NavLink>
    <NavLink to="/admin" activeClassName="active">
      <i className="fa fa-home" /> Home
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

AdminNavLink.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(AdminNavLink));
