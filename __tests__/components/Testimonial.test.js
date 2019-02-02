import React from 'react';
import { shallow } from 'enzyme';
import Testimonial from '../../src/components/views/Showcase/Testimonial';

const wrap = shallow(<Testimonial />);

describe('<Testimonial />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
