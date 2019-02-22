import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ isLoading }) => (
  <div className="spinner-holder" id="loader" style={{ display: isLoading ? 'block' : 'none' }}>
    <h2 className="text-center spinner-text-color">
      <i className="fa fa-spinner fa-spin" /> Loading...
    </h2>
  </div>
);

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

Spinner.defaultProps = {
  isLoading: false,
};

export default Spinner;
