import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNavLink = () => (
  <>
    <NavLink to="/" activeClassName="active">
      <i className="fa fa-list" /> Menu
    </NavLink>
  </>
);

export default UserNavLink;
