import React from 'react';
import PropTypes from 'prop-types';

const AlertMessage = ({ message }) => (
  <div id="order-alert-div" className="order-action-alert el-card">
    <span>
      <i className="fa fa-check" aria-hidden="true" />
    </span>
    <p id="order-alert-p">{message}</p>
  </div>
);

AlertMessage.propTypes = {
  message: PropTypes.string,
};

export default AlertMessage;
