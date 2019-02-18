import React from 'react';
import { shallow } from 'enzyme';
import { HashLink as Link } from 'react-router-hash-link';
import AboutNavLink from '../../src/components/views/NavBar/AboutNavLink/AboutNavLink';

const wrap = shallow(<AboutNavLink />);

describe('<AboutNavLink/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render the correct elements', () => {
    expect(
      wrap.containsMatchingElement(
        <>
          <Link to="/about#works">
            <i className="fa fa-info-circle" /> How it works
          </Link>
          <Link to="/about#contact">
            <i className="fa fa-envelope" /> Contact Us
          </Link>
          <>
            <Link id="login-link" to="login">
              <i className="fa fa-sign-in" /> Login
            </Link>
            <Link id="signup-link" to="signup">
              <i className="fa fa-user-plus" /> Sign Up
            </Link>
          </>
        </>,
      ),
    ).toBeTruthy();
  });
});
