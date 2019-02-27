import React from 'react';
import { shallow } from 'enzyme';
import NewOrders from '../../../src/components/views/Order/OrderStatCard/NewOrders';

describe('<NewOrders />', () => {
  const wrap = shallow(<NewOrders count={4} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
