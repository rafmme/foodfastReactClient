import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../src/components/views/Modal/Modal';

const wrap = shallow(
  <Modal isOpened>
    <p>Hello World</p>
  </Modal>,
);

describe('<Modal />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should check the current style', () => {
    expect(wrap.get(0).props.style.display).toEqual('block');
  });

  it('should check the current style if isOpened is false', () => {
    wrap.setProps({ isOpened: false });
    expect(wrap.get(0).props.style.display).toEqual('none');
  });
});
