import React from 'react';
import { shallow } from 'enzyme';
import { AdminHome } from '../../src/components/views/Admin/AdminHome';
import mockOrders from '../../__mocks__/mockOrders';

describe('<AdminHome />', () => {
  const fetchAllOrders = jest.fn();
  const wrap = shallow(
    <AdminHome
      isLoading={false}
      isOpened={false}
      hasError={false}
      orders={mockOrders}
      processedOrders={[]}
      newOrders={[]}
      completedOrders={[]}
      fetchOrdersError={{}}
      order={null}
      fetchAllOrders={fetchAllOrders}
    />,
  );

  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render networkError component if hasError is true', () => {
    wrap.setProps({ hasError: true });
    expect(wrap.find('NetworkError').length).toBeGreaterThan(0);
  });
});
