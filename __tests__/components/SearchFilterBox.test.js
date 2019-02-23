import React from 'react';
import { shallow } from 'enzyme';
import SearchFilterBox from '../../src/components/views/SearchFilterBox/SearchFilterBox';

describe('<SearchFilterBox />', () => {
  const preventDefault = jest.fn();
  const wrap = shallow(<SearchFilterBox />);
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate input event on the search box', () => {
    wrap.find('#order-search-box').simulate('input', { preventDefault });
    expect(preventDefault.mock.calls.length).toBeGreaterThan(0);
  });

  it('should simulate change event on the filter box', () => {
    wrap.find('#order-filter').simulate('change', { preventDefault });
    expect(preventDefault.mock.calls.length).toBeGreaterThan(0);
  });
});
