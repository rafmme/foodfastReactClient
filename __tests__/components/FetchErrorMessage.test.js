import React from 'react';
import { shallow } from 'enzyme';
import FetchErrorMessage from '../../src/components/views/Showcase/FetchErrorMessage';

const wrap = shallow(<FetchErrorMessage hasError errorMessage={{ message: 'Error occured' }} />);

describe('<FetchErrorMessage />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should check the current style if hasError is true', () => {
    expect(wrap.get(0).props.style.display).toEqual('block');
  });

  it('should check the current style if hasError is false', () => {
    wrap.setProps({ hasError: false });
    expect(wrap.get(0).props.style.display).toEqual('none');
  });
});
