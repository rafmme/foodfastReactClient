import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

const wrapper = shallow(<App />);

describe('Test App component <App />', () => {
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
