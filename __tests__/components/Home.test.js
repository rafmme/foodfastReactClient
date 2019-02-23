import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/views/Home';

describe('<Home />', () => {
  const wrap = shallow(<Home />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
