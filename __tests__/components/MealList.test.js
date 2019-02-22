import React from 'react';
import { shallow } from 'enzyme';
import MealList from '../../src/components/views/Menu/MealList';
import mockMenu from '../../__mocks__/mockMenu';

const wrap = shallow(<MealList menu={mockMenu} hasError={false} isLoading={false} />);

describe('<MealList />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
