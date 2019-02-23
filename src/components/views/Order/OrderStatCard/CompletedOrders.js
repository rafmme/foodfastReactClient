import React from 'react';
import PropTypes from 'prop-types';

const CompletedOrders = ({ count }) => (
  <div className="stat m-card">
    <div className="stat-div text-center">
      <h3 className="animate text-primary-green">Completed Orders</h3>
      <h2 className="animate text-primary-green" id="complete-order-stat">
        {count}
      </h2>
    </div>
  </div>
);

CompletedOrders.propTypes = {
  count: PropTypes.number,
};

export default CompletedOrders;
