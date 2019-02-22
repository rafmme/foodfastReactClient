import React from 'react';
import { shallow } from 'enzyme';
import { UserNavLink } from '../../src/components/views/NavBar/UserNavLink/UserNavLink';

const logoutUser = jest.fn();
const preventDefault = jest.fn();
const wrap = shallow(<UserNavLink logoutUser={logoutUser} />);

describe('<UserNavLink/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate logout link click', () => {
    wrap.find('#log-out').simulate('click', { preventDefault });
    expect(preventDefault.mock.calls.length).toEqual(1);
    expect(logoutUser.mock.calls.length).toEqual(1);
  });
});
