import React from 'react';
import { shallow } from 'enzyme';
import Meal from '../../src/components/views/Menu/Meal';
import mockMenu from '../../__mocks__/mockMenu';

const wrap = shallow(<Meal meal={mockMenu[0]} />);

describe('<Meal/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
