import React from 'react';
import { shallow } from 'enzyme';
import mockOrders from '../../../__mocks__/mockOrders';
import { OrderInfo } from '../../../src/components/views/Order/OrderTable/OrderInfo';

describe('<OrderInfo />', () => {
  const removeOrder = jest.fn();
  const hideModal = jest.fn();
  const wrap = shallow(
    <OrderInfo order={mockOrders[0]} removeOrder={removeOrder} hideModal={hideModal} />,
  );

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click event on order info modal close button', () => {
    wrap.find('#order-info-close').simulate('click');
    expect(removeOrder.mock.calls.length).toBeGreaterThan(0);
    expect(hideModal.mock.calls.length).toBeGreaterThan(0);
  });
});
