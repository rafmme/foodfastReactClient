/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderAction from '../../../actions/order.action';
import ModalAction from '../../../actions/modal.action';

export class OrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuIcon: false,
    };
  }

  toggleMenuIcon = () => {
    const { showMenuIcon } = this.state;
    this.setState({
      showMenuIcon: !showMenuIcon,
    });
  };

  render() {
    const { order, fetchOrder, showModal } = this.props;
    const { showMenuIcon } = this.state;
    const {
      orderId,
      customer: { email },
      food: { title },
      quantity,
      totalPrice,
      createdAt,
      status,
    } = order;
    return (
      <div
        id="order-card"
        className="order-card el-card"
        onDoubleClick={() => {
          fetchOrder(order);
          showModal();
        }}
      >
        <div className="mg">
          <i id="menu-icon" className="fa fa-ellipsis-v icn" onClick={this.toggleMenuIcon} />
          <ul className={showMenuIcon ? '' : 'hide'} id="menu">
            <li className="el-card">
              <a
                id="view-link"
                className="bg-green"
                href="/"
                onClick={evt => {
                  evt.preventDefault();
                  fetchOrder(order);
                  showModal();
                }}
              >
                <i className="fa fa-info" />
                View
              </a>
            </li>
            {/* istanbul ignore next */ status === 'New' && (
              <>
                <li className="el-card">
                  <a id="accept" className="bg-green" href="/">
                    <i className="fa fa-check" />
                    Accept
                  </a>
                </li>
                <li className="el-card">
                  <a id="cancel" className="bg-red" href="/">
                    <i className="fa fa-trash-o" />
                    Reject
                  </a>
                </li>
              </>
            )}
            {/* istanbul ignore next */ status === 'Processing' && (
              <li className="el-card">
                <a href="/" className="bg-green">
                  <i className="fa fa-edit" />
                  Update
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="order-history-header">
          <h3>#{orderId.slice(0, 8)}</h3>
          <h3>
            {new Date(createdAt).toDateString()} {new Date(createdAt).toLocaleTimeString()}
          </h3>
        </div>
        <hr />
        <div>
          <p>
            <span>
              <i className="fa fa-user"> {email}</i>
            </span>
            &nbsp; - &nbsp;{title}&nbsp; - &nbsp;{quantity} pcs
          </p>
        </div>
        <div className="order-history-footer">
          <h3 className="text-primary-color">₦ {totalPrice}</h3>
          <h3>
            Status:{' '}
            {/* istanbul ignore next */ status === 'Complete' && (
              <span className="text-primary-green">{status}</span>
            )}
            {/* istanbul ignore next */ status === 'Processing' && (
              <span className="text-orange">{status}</span>
            )}
            {/* istanbul ignore next */ status === 'New' && (
              <span className="text-blue">{status}</span>
            )}
            {/* istanbul ignore next */ status === 'Cancelled' && (
              <span className="text-primary-color">{status}</span>
            )}
          </h3>
        </div>
      </div>
    );
  }
}

OrderCard.propTypes = {
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
)(OrderCard);
