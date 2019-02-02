import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
