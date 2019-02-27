import React from 'react';
import { shallow } from 'enzyme';
import ProcessedOrders from '../../../src/components/views/Order/OrderStatCard/ProcessedOrders';

describe('<ProcessedOrders />', () => {
  const wrap = shallow(<ProcessedOrders count={4} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
