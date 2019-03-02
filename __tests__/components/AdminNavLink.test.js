import React from 'react';
import { shallow } from 'enzyme';
import { AdminNavLink } from '../../src/components/views/NavBar/AdminNavLink/AdminNavLink';

const logoutUser = jest.fn();
const preventDefault = jest.fn();
const wrap = shallow(<AdminNavLink logoutUser={logoutUser} />);

describe('<AdminNavLink/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click event on admin name', () => {
    wrap.find('#current-user').simulate('click', { preventDefault });
    expect(preventDefault.mock.calls.length).toEqual(1);
  });

  it('should simulate logout link click', () => {
    wrap.find('#log-out').simulate('click', { preventDefault });
    expect(preventDefault.mock.calls.length).toEqual(1);
    expect(logoutUser.mock.calls.length).toEqual(1);
  });
});
