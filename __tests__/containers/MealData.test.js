import React from 'react';
import { shallow } from 'enzyme';
import { MealData } from '../../src/components/containers/Meal/MealData';
import mockMenu from '../../__mocks__/mockMenu';

const fetchMenu = jest.fn();
const render = jest.fn();
const wrap = shallow(
  <MealData itemsPerPage={1} menu={mockMenu} render={render} fetchMenu={fetchMenu} />,
);

describe('<MealData />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('Test ComponentDidMount', () => {
    wrap.instance().componentDidMount();
    expect(fetchMenu.mock.calls.length).toEqual(1);
  });
});
