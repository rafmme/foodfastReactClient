import React from 'react';
import PropTypes from 'prop-types';
import Orders from './OrderRow';

const Table = ({ orderList }) => {
  if (orderList.length < 1) {
    return (
      <div id="no-orders-text" className="text-center">
        <h1>No Orders yet</h1>
      </div>
    );
  }
  const orderRow = orderList.map(order => <Orders key={order.orderId} order={order} />);
  return (
    <table id="orders-table" className="el-card">
      <thead>
        <tr>
          <th scope="col">OrderID</th>
          <th scope="col">Food Item</th>
          <th scope="col">Qty</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody id="order-table-body">{orderRow}</tbody>
    </table>
  );
};

Table.propTypes = {
  orderList: PropTypes.array,
};

export default Table;
