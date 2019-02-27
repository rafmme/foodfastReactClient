import React from 'react';
import { mount } from 'enzyme';
import { OrderForm, mapStateToProps } from '../../src/components/views/OrderForm/OrderForm';
import mockMenu from '../../__mocks__/mockMenu';

const placeOrder = jest.fn();
const hideModal = jest.fn();
const removeMeal = jest.fn();
const preventDefault = jest.fn();
const wrap = mount(
  <OrderForm
    placeOrder={placeOrder}
    hideModal={hideModal}
    history={{}}
    mealData={mockMenu[1]}
    removeMeal={removeMeal}
  />,
);

describe('<OrderForm />', () => {
  it('should render component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click event on the submit button', () => {
    wrap.find('#order-form').simulate('submit', {
      preventDefault,
    });

    expect(wrap.state('hasValidationError')).toEqual(true);
  });

  it('should update the state when input fields change', () => {
    wrap.find('#quantity').simulate('change', {
      preventDefault,
      target: { value: 1, id: 'quantity' },
    });
    wrap.find('#phoneNumber').simulate('change', {
      target: { value: '08112345678', id: 'phoneNumber' },
      preventDefault,
    });

    wrap.find('#deliveryAddress').simulate('change', {
      target: { value: 'Lagos Island', id: 'deliveryAddress' },
      preventDefault,
    });

    expect(wrap.state('inputFieldsData').phoneNumber).toEqual('08112345678');
    expect(wrap.state('inputFieldsData').deliveryAddress).toEqual('Lagos Island');
    expect(wrap.state('inputFieldsData').quantity).toEqual(1);
  });

  it('should submit form if input are valid', () => {
    wrap.setState({
      hasValidationError: false,
      validationErrors: [],
      inputFieldsData: {
        quantity: 1,
        phoneNumber: '08112345678',
        deliveryAddress: 'Lagos Island',
        foodId: mockMenu[1].id,
        totalPrice: 500,
      },
    });
    wrap.find('#order-form').simulate('submit', {
      preventDefault,
    });

    expect(placeOrder.mock.calls.length).toEqual(1);
  });

  it('should simulate onClick on the modal close button', () => {
    wrap.find('#close-btn').simulate('click', {
      preventDefault,
    });

    expect(hideModal.mock.calls.length).toEqual(1);
    expect(removeMeal.mock.calls.length).toEqual(1);
  });

  it('should render error message div', () => {
    wrap.setProps({ hasError: true, orderError: ['Error'] });
    expect(wrap.find('#error-message').length).toEqual(1);
  });

  it('should render success message div', () => {
    wrap.setProps({ hasError: false, message: 'success', orderComplete: true });
    expect(wrap.find('#success-message').length).toEqual(1);
  });

  it('should check the current style if isLoading is false', () => {
    expect(wrap.find('#place-order-btn').getElement().props.style.background).toEqual('#019875');
    expect(wrap.find('#place-order-btn').text()).toEqual('Place Order');
  });

  it('should check the current style if isLoading is true', () => {
    wrap.setProps({ isLoading: true });
    expect(wrap.find('#place-order-btn').getElement().props.style.background).toEqual('darkgray');
    expect(wrap.find('#place-order-btn').text()).toEqual(' Placing your order...');
  });

  it('should test mapStateToProps function', () => {
    const state = {
      menu: { meal: mockMenu[1] },
      order: {
        isLoading: false,
        hasError: false,
        orderError: [],
      },
    };
    const result = {
      mealData: mockMenu[1],
      isLoading: false,
      hasError: false,
      orderError: [],
    };

    expect(mapStateToProps(state)).toEqual(result);
  });
});
