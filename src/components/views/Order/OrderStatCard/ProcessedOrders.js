import React from 'react';
import PropTypes from 'prop-types';

const ProcessedOrders = ({ count }) => (
  <div className="stat m-card">
    <div className="stat-div text-center">
      <h3 className="animate text-orange">Orders being processed</h3>
      <h2 className="animate text-orange" id="processed-order-stat">
        {count}
      </h2>
    </div>
  </div>
);

ProcessedOrders.propTypes = {
  count: PropTypes.number,
};

export default ProcessedOrders;
