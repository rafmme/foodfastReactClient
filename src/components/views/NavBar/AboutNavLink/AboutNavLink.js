import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import AuthHelper from '../../../../helpers/AuthHelper';

const AboutNavLink = () => (
  <>
    <Link to="/about#works">
      <i className="fa fa-info-circle" /> How it works
    </Link>
    <Link to="/about#contact">
      <i className="fa fa-envelope" /> Contact Us
    </Link>
    {!AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) && (
      <>
        <Link id="login-link" to="login">
          <i className="fa fa-sign-in" /> Login
        </Link>
        <Link id="signup-link" to="signup">
          <i className="fa fa-user-plus" /> Sign Up
        </Link>
      </>
    )}
  </>
);

export default AboutNavLink;
