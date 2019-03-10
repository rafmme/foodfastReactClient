import React from 'react';
import { shallow } from 'enzyme';
import OrderContainer from '../../src/components/containers/Order/OrderData';
import mockOrders from '../../__mocks__/mockOrders';

const render = jest.fn();
const wrap = shallow(<OrderContainer itemsPerPage={1} orders={mockOrders} render={render} />);

describe('<OrderContainer />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
