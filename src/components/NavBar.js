import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getRedirectionLink } from '../utils/validate';

const showHiddenLink = e => {
  e.preventDefault();
  const el = document.getElementById('myTopnav');
  el.classList.toggle('responsive');
};

const NavBar = ({ children }) => {
  const jwtToken = localStorage.userToken;
  return (
    <header id="header">
      <nav className="topnav" id="myTopnav">
        <Link to={getRedirectionLink(jwtToken)} id="brand">
          FoodFast
        </Link>
        <div id="rule" />
        <div className="lnk">
          <Link to="null" className="alink hide">
            _
          </Link>
          {children}
        </div>
        <Link to="null" onClick={showHiddenLink} id="toggle" className="icon">
          <span className="topnav-span" />
          <span className="topnav-span" />
          <span className="topnav-span" />
        </Link>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withRouter(NavBar);
