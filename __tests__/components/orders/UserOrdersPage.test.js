import React from 'react';
import { shallow } from 'enzyme';
import {
  UserOrders,
  mapStateToProps,
} from '../../../src/components/views/Order/UserOrdersPage/UserOrdersPage';
import mockOrders from '../../../__mocks__/mockOrders';

describe('<UserOrders />', () => {
  const fetchOrders = jest.fn();
  const wrap = shallow(
    <UserOrders
      isLoading={false}
      isOpened={false}
      hasError={false}
      orders={mockOrders}
      processedOrders={[]}
      newOrders={[]}
      completedOrders={[]}
      fetchOrdersError={{}}
      order={null}
      fetchOrders={fetchOrders}
    />,
  );

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render networkError component if hasError is true', () => {
    wrap.setProps({ hasError: true });
    expect(wrap.find('NetworkError').length).toBeGreaterThan(0);
  });

  it('should test mapStateToProps function', () => {
    const state = {
      order: {
        isLoading: false,
        hasError: false,
        fetchOrdersError: {},
        orders: [],
        processedOrders: [],
        completedOrders: [],
        newOrders: [],
        order: {},
      },
      modal: { isOpened: false },
    };
    const result = {
      isLoading: false,
      hasError: false,
      fetchOrdersError: {},
      isOpened: false,
      orders: [],
      processedOrders: [],
      completedOrders: [],
      newOrders: [],
      order: {},
    };
    expect(mapStateToProps(state)).toEqual(result);
  });
});
