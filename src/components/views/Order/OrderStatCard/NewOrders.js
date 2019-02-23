import React from 'react';
import PropTypes from 'prop-types';

const NewOrders = ({ count }) => (
  <div className="stat m-card">
    <div className="stat-div text-center">
      <h3 className="animate">New Orders</h3>
      <h2 className="animate" id="new-order-stat">
        {count}
      </h2>
    </div>
  </div>
);

NewOrders.propTypes = {
  count: PropTypes.number,
};

export default NewOrders;
