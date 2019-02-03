import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/views/Footer/Footer';

const wrap = shallow(<Footer />);

describe('<Footer />', () => {
  it('should render successfully', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should display right footer text', () => {
    expect(wrap.find('p.text-center').text()).toEqual(
      `© FoodFast 2018 - ${new Date().getFullYear()}`,
    );
  });

  it('should render the correct elements', () => {
    expect(
      wrap.containsMatchingElement(
        <footer>
          <p className="text-center">&copy; FoodFast 2018 - {new Date().getFullYear()}</p>
        </footer>,
      ),
    ).toBeTruthy();
  });
});
