import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../src/components/views/Order/OrderTable/Table';
import mockOrders from '../../../__mocks__/mockOrders';

describe('<Table />', () => {
  const wrap = shallow(<Table orderList={[]} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render the order tables if orderList is not empty', () => {
    wrap.setProps({ orderList: mockOrders });
    expect(wrap).toMatchSnapshot();
  });
});
