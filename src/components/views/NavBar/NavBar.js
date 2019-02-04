import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }

  handleToggle = evt => {
    const { isToggled } = this.state;
    evt.preventDefault();
    const newToggleState = !isToggled;
    this.setState({
      isToggled: newToggleState,
    });
  };

  render() {
    const { isToggled } = this.state;
    const { children } = this.props;
    return (
      <header id="header">
        <nav className={`topnav${isToggled ? ' responsive' : ''}`} id="myTopnav">
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
          <Link
            to="null"
            onClick={evt => {
              this.handleToggle(evt);
            }}
            id="toggle"
            className="icon"
          >
            <span className="topnav-span" />
            <span className="topnav-span" />
            <span className="topnav-span" />
          </Link>
        </nav>
      </header>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.object,
};

export default withRouter(NavBar);
