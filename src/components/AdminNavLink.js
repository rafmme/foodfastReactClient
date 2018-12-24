import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavLink = () => (
  <>
    <NavLink to="/admin" activeClassName="active">
      <i className="fa fa-home" /> Home
    </NavLink>
    <NavLink to="/adm/menu" activeClassName="active">
      <i className="fa fa-spoon" /> View Foods
    </NavLink>
    <NavLink to="null" onClick={e => e.preventDefault()}>
      <i className="fa fa-sign-out" /> Sign out
    </NavLink>
    <NavLink
      className="no-link"
      onClick={e => e.preventDefault()}
      to="null"
      style={{ cursor: 'none' }}
    >
      <i className="fa fa-user" /> Admin
    </NavLink>
  </>
);

export default AdminNavLink;
