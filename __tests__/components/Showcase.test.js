import React from 'react';
import { shallow } from 'enzyme';
import Showcase from '../../src/components/views/Showcase/Showcase';

const wrap = shallow(<Showcase />);
wrap.setProps({ children: {} });

describe('<Showcase />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should have a history props', () => {
    expect(typeof wrap.props('children')).toEqual('object');
  });

  it('renders div elements with classNames showcase & search-container', () => {
    expect(wrap.find('div.showcase').length).toEqual(1);
    expect(wrap.find('div.showcase').find('div.search-container').length).toEqual(1);
  });
});
