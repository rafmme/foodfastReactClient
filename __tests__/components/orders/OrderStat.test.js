import React from 'react';
import { shallow } from 'enzyme';
import OrderStat from '../../../src/components/views/Order/UserOrdersPage/OrderStat';

describe('<OrderStat />', () => {
  const wrap = shallow(<OrderStat />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
