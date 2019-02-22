import React from 'react';
import { shallow } from 'enzyme';
import HeroSearchBox from '../../src/components/views/Showcase/HeroSearchBox';

const wrap = shallow(<HeroSearchBox />);
const preventDefault = jest.fn();

describe('<HeroSearchBox />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate onSubmit event on form', () => {
    wrap.find('#hero-search-form').simulate('submit', {
      preventDefault,
    });

    expect(preventDefault.mock.calls.length).toEqual(1);
  });

  it('should simulate onChange event on input field', () => {
    wrap.find('#search-box').simulate('change', {
      preventDefault,
    });

    expect(preventDefault.mock.calls.length).toEqual(1);
  });
});
