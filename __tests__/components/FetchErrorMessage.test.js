import React from 'react';
import { shallow } from 'enzyme';
import FetchErrorMessage from '../../src/components/views/Showcase/FetchErrorMessage';

const wrap = shallow(<FetchErrorMessage hasError errorMessage={{ message: 'Error occured' }} />);

describe('<FetchErrorMessage />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });
});
