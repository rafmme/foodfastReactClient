import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../src/components/views/Contact/Contact';

const wrap = shallow(<Contact />);

describe('<Contact />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
