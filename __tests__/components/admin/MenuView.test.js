import React from 'react';
import { shallow } from 'enzyme';
import { MenuView } from '../../../src/components/views/Admin/Menu/MenuView';
import mockMenu from '../../../__mocks__/mockMenu';

describe('<MenuView />', () => {
  const wrap = shallow(<MenuView menu={mockMenu} />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should set display style to none if hasError is true', () => {
    wrap.setProps({ hasError: true });
    expect(wrap.find('#adm-food').getElement().props.style.display).toEqual('none');
  });

  it('should set display style to block if hasError is false', () => {
    wrap.setProps({ hasError: false });
    expect(wrap.find('#adm-food').getElement().props.style.display).toEqual('block');
  });
});
