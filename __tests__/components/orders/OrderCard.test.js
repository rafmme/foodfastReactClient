import React from 'react';
import { shallow } from 'enzyme';
import { OrderCard } from '../../../src/components/views/Admin/OrderCard';
import mockOrders from '../../../__mocks__/mockOrders';

describe('<OrderCard />', () => {
  const fetchOrder = jest.fn();
  const showModal = jest.fn();
  const preventDefault = jest.fn();
  const wrap = shallow(
    <OrderCard order={mockOrders[0]} fetchOrder={fetchOrder} showModal={showModal} />,
  );
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate doubleClick event on the order card', () => {
    wrap.find('#order-card').simulate('dblclick');
    expect(fetchOrder.mock.calls.length).toBeGreaterThan(0);
    expect(showModal.mock.calls.length).toBeGreaterThan(0);
  });

  it('should simulate click event on the view button', () => {
    wrap.find('#view-link').simulate('click', { preventDefault });
    expect(preventDefault.mock.calls.length).toBeGreaterThan(0);
    expect(fetchOrder.mock.calls.length).toBeGreaterThan(0);
    expect(showModal.mock.calls.length).toBeGreaterThan(0);
  });

  it('should simulate click event on the ellipsis menu icon', () => {
    wrap.setState({ showMenuIcon: true });
    wrap.find('#menu-icon').simulate('click');
    expect(wrap.state('showMenuIcon')).toEqual(false);
  });
});
