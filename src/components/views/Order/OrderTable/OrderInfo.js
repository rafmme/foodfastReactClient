/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalAction from '../../../../actions/modal.action';
import OrderAction from '../../../../actions/order.action';

export const OrderInfo = ({ order, hideModal, removeOrder }) => {
  const {
    orderId,
    customer: { email },
    food: { title, imageUrl },
    quantity,
    totalPrice,
    createdAt,
    phoneNumber,
    deliveryAddress,
    status,
  } = order;
  return (
    <>
      <div className="imgcontainer">
        <span
          id="order-info-close"
          style={{ marginTop: '-15px' }}
          onClick={() => {
            removeOrder();
            hideModal();
          }}
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
      </div>
      <h3>Order Information</h3>
      <div className="row">
        <div className="col-2">
          <label htmlFor="orderID">Order ID</label>
          <input type="text" name="" id="orderID" defaultValue={orderId} disabled />
        </div>
        <div className="col-2">
          <div className="mg-left-10">
            <label htmlFor="customer">Customer</label>
            <input type="text" name="" id="customer" defaultValue={email} disabled />
          </div>
        </div>
      </div>
      <label htmlFor="title">Food Item</label>
      <input type="text" name="" id="title" defaultValue={title} disabled />
      <img src={imageUrl} alt="meal" className="modal-image" />
      <div className="row">
        <div className="col-2">
          {' '}
          <label htmlFor="qty">Quantity</label>
          <input type="number" defaultValue={quantity} name="" id="qty" disabled />
        </div>
        <div className="col-2">
          <div className="mg-left-10">
            <label htmlFor="price">Total Price</label>
            <input type="text" defaultValue={`₦ ${totalPrice}`} name="" id="price" disabled />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name=""
            id="phone"
            defaultValue={phoneNumber}
            disabled
            placeholder="Phone Number"
          />
        </div>
        <div className="col-2">
          <div className="mg-left-10">
            <label htmlFor="address">Delivery Address</label>
            <input
              type="text"
              name=""
              id="address"
              defaultValue={deliveryAddress}
              disabled
              placeholder="Delivery Location"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label htmlFor="date">Date & Time Placed</label>
          <input
            type="text"
            name=""
            id="date"
            defaultValue={new Date(createdAt).toDateString()}
            disabled
            placeholder="Date of Order"
          />
        </div>
        <div className="col-2">
          <div className="mg-left-10">
            <label htmlFor="status">Order Status</label>
            <input type="text" name="" id="status" defaultValue={status} disabled />
          </div>
        </div>
      </div>
    </>
  );
};

OrderInfo.propTypes = {
  order: PropTypes.object,
  hideModal: PropTypes.func,
  removeOrder: PropTypes.func,
};

const mapDispatchToProps = {
  hideModal: ModalAction.hideModal,
  removeOrder: OrderAction.removeOrder,
};

export default connect(
  null,
  mapDispatchToProps,
)(OrderInfo);
