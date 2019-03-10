import React from 'react';
import { shallow } from 'enzyme';
import AlertMessage from '../../../src/components/views/Admin/AlertMessage';

const wrap = shallow(<AlertMessage message="Hello World" />);

describe('<AlertMessage />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
