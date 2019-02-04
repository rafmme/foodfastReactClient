import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../src/components/views/NavBar/NavBar';

const wrap = shallow(<NavBar />);
const preventDefault = jest.fn();

describe('<NavBar />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should have a state field of isToggled = false', () => {
    expect(wrap.state('isToggled') === false).toEqual(true);
  });

  it('should simulate click on hamburger icon and set isToggled to true in state', () => {
    wrap.find('#toggle').simulate('click', { preventDefault });
    expect(wrap.state('isToggled')).toEqual(true);
  });
});
