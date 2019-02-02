import React from 'react';
import { shallow } from 'enzyme';
import Service from '../../src/components/views/Showcase/Service';

const wrap = shallow(<Service />);

describe('<Service />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
