import React from 'react';
import PropTypes from 'prop-types';

const TotalOrders = ({ count }) => (
  <div className="stat m-card">
    <div className="stat-div text-center">
      <h3 className="animate text-orange">Total Orders</h3>
      <h2 className="animate text-orange" id="total-order-stat">
        {count}
      </h2>
    </div>
  </div>
);

TotalOrders.propTypes = {
  count: PropTypes.number,
};

export default TotalOrders;
