/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      inputFieldsData: {
        quantity: 1,
        phoneNumber: '',
        deliveryAddress: '',
        foodId: '',
        totalPrice: '',
      },
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputFieldsData } = this.state;
    const { deliveryAddress, phoneNumber } = inputFieldsData;
    const { mealData } = this.props;
    const { id } = mealData;
    inputFieldsData.foodId = id;
    this.setState(prevState => ({
      ...prevState,
      inputFieldsData,
      isLoading: true,
    }));
    localStorage.userAddress = deliveryAddress;
    localStorage.userPhoneNumber = phoneNumber;
  }

  handleChange(e) {
    e.preventDefault();
    const { inputFieldsData } = this.state;
    if (e.target.name === 'quantity') {
      const { mealData } = this.props;
      const { price } = mealData;
      inputFieldsData.quantity = parseInt(e.target.value, 10);
      inputFieldsData.totalPrice = inputFieldsData.quantity * price;
    } else {
      inputFieldsData[e.target.name] = e.target.value;
    }
    this.setState(prevState => ({
      ...prevState,
      inputFieldsData,
      isLoading: false,
    }));
  }

  render() {
    const { onClose, mealData } = this.props;
    const { inputFieldsData, isLoading } = this.state;
    const { totalPrice, quantity } = inputFieldsData;
    const { title, price } = mealData;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
          <span
            style={{ marginTop: '-15px' }}
            onClick={e => {
              e.preventDefault();
              this.ref.current.value = 1;
              this.setState({
                inputFieldsData: {
                  quantity: 1,
                  phoneNumber: '',
                  deliveryAddress: '',
                  foodId: '',
                  totalPrice: '',
                },
                isLoading: false,
              });
              onClose(e);
            }}
            className="close"
            title="Close Modal"
          >
            &times;
          </span>
        </div>
        <h3>Place Order</h3>
        <div className="alert" id="orderFailAlert_{meal.id}" style={{ display: 'none' }}>
          <p id="orderMsg_{meal.id}" style={{ marginTop: '10px' }} />
        </div>
        <div
          className="alert bg-green text-center"
          id="orderSuccessAlert_{meal.id}"
          style={{ display: 'none' }}
        >
          <i className="fa fa-check" /> Order was placed successfully
        </div>
        <label htmlFor="title">Food Name</label>
        <input type="text" name="" defaultValue={title} disabled />
        <label htmlFor="qty">Quantity</label>
        <input
          type="number"
          name="quantity"
          defaultValue={quantity}
          ref={this.ref}
          required
          onChange={this.handleChange}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          defaultValue={localStorage.getItem('userPhoneNumber')}
          onChange={this.handleChange}
          required
          placeholder="Phone Number"
        />
        <label htmlFor="address">Delivery Address</label>
        <input
          type="text"
          name="deliveryAddress"
          defaultValue={localStorage.getItem('userAddress')}
          onChange={this.handleChange}
          required
          placeholder="Delivery Location"
        />
        <label htmlFor="price">Total Price (₦)</label>
        <input type="text" defaultValue={totalPrice || price} name="" disabled />
        <button
          type="submit"
          id="ord_{meal.id}"
          style={{ marginTop: 'auto', background: isLoading ? 'darkgray' : '#019875' }}
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
  onClose: PropTypes.func.isRequired,
  mealData: PropTypes.object.isRequired,
};
