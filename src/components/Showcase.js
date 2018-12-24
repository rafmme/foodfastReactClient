import React from 'react';
import { PropTypes } from 'prop-types';

const ShowCase = ({ children }) => (
  <>
    <div className="showcase">
      <div className="search-container">{children}</div>
    </div>
  </>
);

ShowCase.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ShowCase;
