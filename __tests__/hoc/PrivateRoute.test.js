import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import AuthHelper from '../../src/helpers/AuthHelper';
import PrivateRoute from '../../src/hoc/PrivateRoute';
import MealMenu from '../../src/components/views/Menu/Menu';

jest.mock('../../src/helpers/AuthHelper');

const wrap = shallow(
  <Router>
    <PrivateRoute exact path="/" component={MealMenu} />
  </Router>,
);

describe('<PrivateRoute />', () => {
  afterAll(() => AuthHelper.mockClear());

  it('should render redirect if user is not authenticated', () => {
    AuthHelper.mockImplementation(() => ({
      checkUserIsAuthenticated: () => false,
    }));
    expect(wrap.html()).not.toBe(null);
  });

  it('should render the menu page if user is authenticated', () => {
    AuthHelper.mockImplementation(() => ({
      checkUserIsAuthenticated: () => true,
    }));
    expect(wrap.html()).not.toBe(null);
  });
});
