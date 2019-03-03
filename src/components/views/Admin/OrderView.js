import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from './OrderCard';

const OrderView = ({ orderList }) => {
  if (orderList.length < 1) {
    return (
      <div id="no-orders-text" className="text-center">
        <h1>No Orders yet</h1>
      </div>
    );
  }
  const orderCards = orderList.map(order => <OrderItem key={order.orderId} order={order} />);
  return (
    <div className="orders-container" id="orders-holder">
      {orderCards}
    </div>
  );
};

OrderView.propTypes = {
  orderList: PropTypes.array,
};

export default OrderView;
