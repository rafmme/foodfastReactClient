import React from 'react';
import { shallow } from 'enzyme';
import { Link, BrowserRouter } from 'react-router-dom';
import NavBar, { showHiddenLink } from '../../src/components/views/NavBar/NavBar';

const wrap = shallow(<NavBar />);
const fn = jest.fn();

describe('<NavBar />', () => {
  it('renders the component successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should simulate click on hamburger icon', () => {
    const hamburger = shallow(
      <BrowserRouter>
        <Link to="null" onClick={fn} id="toggle" className="icon">
          <span className="topnav-span" />
          <span className="topnav-span" />
          <span className="topnav-span" />
        </Link>
      </BrowserRouter>,
    );
    hamburger.find('#toggle').simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });

  it('should test the show hidden link fn', () => {
    expect(typeof showHiddenLink).toEqual('function');
  });
});
