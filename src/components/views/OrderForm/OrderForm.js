/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ModalAction from '../../../actions/modal.action';
import OrderAction from '../../../actions/order.action';
import { validateOrderInput, extractErrorMessages } from '../../../helpers/validations';
import MenuAction from '../../../actions/menu.action';

export class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      hasValidationError: false,
      validationErrors: [],
      inputFieldsData: {
        quantity: 1,
        phoneNumber: localStorage.userPhoneNumber || '',
        deliveryAddress: localStorage.userAddress || '',
        foodId: '',
        totalPrice: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputFieldsData } = this.state;
    const { mealData, hideModal, placeOrder, history } = this.props;
    const { id } = mealData;
    const errors = validateOrderInput(inputFieldsData);
    inputFieldsData.foodId = id;

    if (Object.keys(errors).length >= 1) {
      this.setState({
        hasValidationError: true,
        validationErrors: Object.values(errors),
      });
      return;
    }
    this.setState(prevState => ({
      ...prevState,
      inputFieldsData,
      hasValidationError: false,
      validationErrors: [],
    }));
    placeOrder(inputFieldsData, history, hideModal);
  }

  handleChange(e) {
    e.preventDefault();
    const { inputFieldsData } = this.state;
    if (e.target.id === 'quantity') {
      const {
        mealData: { price },
      } = this.props;
      inputFieldsData.quantity = parseInt(e.target.value, 10);
      inputFieldsData.totalPrice = inputFieldsData.quantity * price;
    } else {
      inputFieldsData[e.target.id] = e.target.value;
    }
    this.setState(prevState => ({
      ...prevState,
      inputFieldsData,
      hasValidationError: false,
    }));
  }

  render() {
    const {
      hideModal,
      mealData,
      isLoading,
      hasError,
      orderComplete,
      message,
      orderError,
      removeMeal,
    } = this.props;
    const { inputFieldsData, validationErrors, hasValidationError } = this.state;
    const { totalPrice, quantity, deliveryAddress, phoneNumber } = inputFieldsData;
    const { title, price } = mealData;
    return (
      <form onSubmit={this.handleSubmit} id="order-form">
        <div className="imgcontainer">
          <span
            id="close-btn"
            style={{ marginTop: '-15px' }}
            onClick={e => {
              e.preventDefault();
              this.ref.current.value = 1;
              this.setState({
                inputFieldsData: {
                  quantity: 1,
                  phoneNumber: localStorage.userPhoneNumber || '',
                  deliveryAddress: localStorage.userAddress || '',
                  foodId: '',
                  totalPrice: '',
                },
              });
              removeMeal();
              hideModal();
            }}
            className="close"
            title="Close Modal"
          >
            &times;
          </span>
        </div>
        <h3>Place Order</h3>
        {((hasValidationError && validationErrors) || (hasError && orderError)) && (
          <div className="alert" id="error-message">
            <p style={{ marginTop: '10px' }}>
              <i className="fa fa-warning" /> &nbsp;
              {extractErrorMessages(validationErrors) || extractErrorMessages(orderError)}
            </p>
          </div>
        )}
        {orderComplete && !hasError && (
          <div className="alert bg-green text-center" id="success-message">
            <i className="fa fa-check" /> {message}
          </div>
        )}
        <label htmlFor="title">Food Name</label>
        <input type="text" name="" defaultValue={title} disabled />
        <label htmlFor="qty">Quantity</label>
        <input
          type="number"
          id="quantity"
          defaultValue={quantity}
          ref={this.ref}
          required
          onChange={this.handleChange}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          defaultValue={phoneNumber}
          onChange={this.handleChange}
          required
          placeholder="Phone Number"
        />
        <label htmlFor="address">Delivery Address</label>
        <input
          type="text"
          id="deliveryAddress"
          defaultValue={deliveryAddress}
          onChange={this.handleChange}
          required
          placeholder="Delivery Location"
        />
        <label htmlFor="price">Total Price (₦)</label>
        <input type="text" defaultValue={totalPrice || price} name="" disabled />
        <button
          id="place-order-btn"
          type="submit"
          className="btn mg-top-10"
          style={{ background: isLoading ? 'darkgray' : '#019875' }}
          disabled={isLoading}
        >
          {isLoading ? (
            <span>
              <i className="fa fa-spinner fa-spin" /> Placing your order...
            </span>
          ) : (
            'Place Order'
          )}
        </button>
      </form>
    );
  }
}

OrderForm.propTypes = {
  hideModal: PropTypes.func,
  placeOrder: PropTypes.func,
  history: PropTypes.object,
  isLoading: PropTypes.bool,
  mealData: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
  orderError: PropTypes.array,
  orderComplete: PropTypes.bool,
  message: PropTypes.string,
  removeMeal: PropTypes.func,
};

OrderForm.defaultProps = {
  isLoading: false,
};

export const mapStateToProps = state => ({
  mealData: state.menu.meal,
  isLoading: state.order.isLoading,
  hasError: state.order.hasError,
  orderError: state.order.orderError,
  orderComplete: state.order.orderComplete,
  message: state.order.message,
});

const mapDispatchToProps = {
  hideModal: ModalAction.hideModal,
  placeOrder: OrderAction.placeOrder,
  removeMeal: MenuAction.removeMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(OrderForm));
