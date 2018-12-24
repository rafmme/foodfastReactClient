import React from 'react';
import { Link } from 'react-router-dom';

const InfoNavLink = () => {
  const unauthorizedUserLinks = !localStorage.getItem('userToken') ? (
    <>
      <Link id="login-link" to="login">
        <i className="fa fa-sign-in" /> Login
      </Link>
      <Link id="signup-link" to="signup">
        <i className="fa fa-user-plus" /> Sign Up
      </Link>
    </>
  ) : null;
  return (
    <>
      <Link to="#works">
        <i className="fa fa-info-circle" /> How it works
      </Link>
      <Link to="#contact">
        <i className="fa fa-envelope" /> Contact Us
      </Link>
      {unauthorizedUserLinks}
    </>
  );
};

export default InfoNavLink;
