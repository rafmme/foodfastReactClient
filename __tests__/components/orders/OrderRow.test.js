import React from 'react';
import { shallow } from 'enzyme';
import { OrderRow } from '../../../src/components/views/Order/OrderTable/OrderRow';
import mockOrders from '../../../__mocks__/mockOrders';

describe('<OrderRow />', () => {
  const fetchOrder = jest.fn();
  const showModal = jest.fn();
  const preventDefault = jest.fn();
  const wrap = shallow(
    <OrderRow order={mockOrders[0]} fetchOrder={fetchOrder} showModal={showModal} />,
  );

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click on table row', () => {
    wrap.find('tr').simulate('click', { preventDefault });
    expect(preventDefault.mock.calls.length).toBeGreaterThan(0);
    expect(fetchOrder.mock.calls.length).toBeGreaterThan(0);
    expect(showModal.mock.calls.length).toBeGreaterThan(0);
  });
});
