import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '../../src/components/views/Menu/Menu';

const fetchMenuError = { message: 'Error occured' };

describe('<Menu/>', () => {
  it('should render successfully', () => {
    const wrap = shallow(<Menu isLoading={false} hasError={false} fetchMenuError={null} />);
    expect(wrap).toMatchSnapshot();
  });

  it('should render NetworkError component if hasError is true', () => {
    const wrap = shallow(<Menu isLoading={false} hasError fetchMenuError={fetchMenuError} />);
    expect(wrap.find('NetworkError').length).toEqual(1);
  });
});
