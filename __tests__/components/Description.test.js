import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../src/components/views/Showcase/Description';

const wrap = shallow(<Description />);
const fn = jest.fn();
wrap.setProps({ history: { push: fn } });

describe('<Description />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should have a history props', () => {
    expect(typeof wrap.props('history')).toEqual('object');
  });

  it('renders a h1 element with classNames animated fadeIn bg-red', () => {
    expect(wrap.find('h1.animated').length).toEqual(1);
    expect(wrap.find('h1.fadeIn').length).toEqual(1);
    expect(wrap.find('h1.bg-red').length).toEqual(1);
    expect(
      wrap
        .find('h1')
        .first()
        .text(),
    ).toEqual('Never get hungry');
  });

  it('should simulate click on the get started button', () => {
    wrap.find('button').simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });
});
