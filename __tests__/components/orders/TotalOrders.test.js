import React from 'react';
import { shallow } from 'enzyme';
import TotalOrders from '../../../src/components/views/Order/OrderStatCard/TotalOrders';

describe('<TotalOrders />', () => {
  const wrap = shallow(<TotalOrders count={4} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
