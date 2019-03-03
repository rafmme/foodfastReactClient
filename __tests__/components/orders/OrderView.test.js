import React from 'react';
import { shallow } from 'enzyme';
import OrderView from '../../../src/components/views/Admin/OrderView';
import mockOrders from '../../../__mocks__/mockOrders';

describe('<OrderView />', () => {
  const wrap = shallow(<OrderView orderList={[]} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render the order tables if orderList is not empty', () => {
    wrap.setProps({ orderList: mockOrders });
    expect(wrap).toMatchSnapshot();
  });
});
