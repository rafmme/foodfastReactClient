import React from 'react';
import PropTypes from 'prop-types';
import networkImage from '../../../../public/assets/images/networkError.png';
import style from './FetchErrorMessage.css';

const NetworkError = ({ hasError, errorMessage }) => (
  <div className="spinner-holder" id="loader" style={{ display: hasError ? 'block' : 'none' }}>
    <div className={style.networkErrorDiv}>
      <img
        className="imgcontainer"
        src={networkImage}
        width="100px"
        height="100px"
        alt="Fetch error"
      />
      <h2>{errorMessage.message}</h2>
      <h3>Check your internet connectivity and refresh the page</h3>
    </div>
  </div>
);

NetworkError.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.object,
};

NetworkError.defaultProps = {
  hasError: false,
};

export default NetworkError;
