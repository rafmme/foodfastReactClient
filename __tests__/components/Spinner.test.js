import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../src/components/views/Spinner/Spinner';

const wrap = shallow(<Spinner />);
wrap.setProps({ isLoading: true });

describe('<Spinner/>', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render the correct elements', () => {
    expect(
      wrap.containsMatchingElement(
        <div className="spinner-holder" id="loader" style={{ display: 'block' }}>
          <h2 className="text-center spinner-text-color">
            <i className="fa fa-spinner fa-spin" /> Loading...
          </h2>
        </div>,
      ),
    ).toBeTruthy();
  });
});
