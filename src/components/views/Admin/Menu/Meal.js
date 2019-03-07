/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    };
  }

  toggleMenu = () => {
    const { showOptions } = this.state;
    this.setState({ showOptions: !showOptions });
  };

  render() {
    const { showOptions } = this.state;
    const {
      meal: { id, imageUrl, title, description, price },
    } = this.props;
    return (
      <div key={id} className="meal-card adm-card text-left">
        <div className="img-frame">
          <img src={imageUrl} alt="Avatar" style={{ width: '100%' }} />
        </div>
        <div id="menu-icon" className="icon-div" onClick={this.toggleMenu}>
          <i className="fa fa-ellipsis-v text-primary-green" style={{ fontSize: '1.5em' }} />
        </div>
        <ul className={showOptions ? '' : 'hide'}>
          <li>
            <a className="bg-green">
              <i className="fa fa-edit" />
              Edit
            </a>
          </li>
          <li>
            <a className="bg-red">
              <i className="fa fa-trash-o" />
              Delete
            </a>
          </li>
        </ul>
        <div className="container">
          <h4 className="foodname-mg">
            <b>{title.slice(0, 19)}</b>
          </h4>
          <p className="min-p">{description}</p>
          <p className="price">₦ {price}</p>
        </div>
      </div>
    );
  }
}

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};
