import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/views/NotFound/NotFound';

const wrap = shallow(<NotFound />);

describe('<NotFound />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
