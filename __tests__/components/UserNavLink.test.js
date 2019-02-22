import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import UserNavLink from '../../src/components/views/NavBar/UserNavLink/UserNavLink';

const wrap = shallow(<UserNavLink />);

describe('<UserNavLink/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render the correct elements', () => {
    expect(
      wrap.containsMatchingElement(
        <>
          <NavLink to="/" activeClassName="active">
            <i className="fa fa-list" /> Menu
          </NavLink>
        </>,
      ),
    ).toBeTruthy();
  });
});
