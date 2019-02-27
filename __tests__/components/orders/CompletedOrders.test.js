import React from 'react';
import { shallow } from 'enzyme';
import CompletedOrders from '../../../src/components/views/Order/OrderStatCard/CompletedOrders';

describe('<CompletedOrders />', () => {
  const wrap = shallow(<CompletedOrders count={4} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
