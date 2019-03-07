import React from 'react';
import { shallow } from 'enzyme';
import Meal from '../../../src/components/views/Admin/Menu/Meal';
import mockMenu from '../../../__mocks__/mockMenu';

const wrap = shallow(<Meal meal={mockMenu[0]} />);

describe('<Meal/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate onClick event on menu button', () => {
    wrap.setState({ showOptions: false });
    wrap.find('#menu-icon').simulate('click');
    expect(wrap.state('showOptions')).toEqual(true);
  });

  it('should show the menu options if showOptions is true', () => {
    wrap.setState({ showOptions: true });
    expect(wrap.find('ul').getElement().props.className).toEqual('');
  });

  it('should hide the menu options if showOptions is false', () => {
    wrap.setState({ showOptions: false });
    expect(wrap.find('ul').getElement().props.className).toEqual('hide');
  });
});
