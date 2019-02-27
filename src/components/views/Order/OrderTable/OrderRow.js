import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderAction from '../../../../actions/order.action';
import ModalAction from '../../../../actions/modal.action';

export const OrderRow = ({ order, fetchOrder, showModal }) => {
  const {
    orderId,
    food: { title },
    quantity,
    totalPrice,
    createdAt,
    status,
  } = order;
  return (
    <tr
      onClick={e => {
        e.preventDefault();
        fetchOrder(order);
        showModal();
      }}
    >
      <td data-label="OrderID">{orderId.slice(0, 8)}</td>
      <td data-label="Food Item">{title}</td>
      <td data-label="Qty">{quantity}</td>
      <td data-label="Amount">₦ {totalPrice}</td>
      <td data-label="Date">
        {new Date(createdAt).toDateString()} {new Date(createdAt).toLocaleTimeString()}
      </td>
      <td data-label="Status">{status}</td>
    </tr>
  );
};

OrderRow.propTypes = {
  order: PropTypes.object,
  fetchOrder: PropTypes.func,
  showModal: PropTypes.func,
};

const mapDispatchToProps = {
  fetchOrder: OrderAction.fetchOrder,
  showModal: ModalAction.showModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(OrderRow);
