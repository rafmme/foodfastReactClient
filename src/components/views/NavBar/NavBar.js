import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const showHiddenLink = e => {
  e.preventDefault();
  const el = document.getElementById('myTopnav');
  el.classList.toggle('responsive');
};

const NavBar = ({ children }) => (
  <header id="header">
    <nav className="topnav" id="myTopnav">
      <Link to="null" id="brand">
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

NavBar.propTypes = {
  children: PropTypes.object,
};

export default withRouter(NavBar);
