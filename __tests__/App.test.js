import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

const wrapper = shallow(<App />);

describe('Test App component <App />', () => {
  it('should have a div tag', () => {
    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a h1 tag', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
