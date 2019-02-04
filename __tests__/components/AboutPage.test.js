import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../../src/components/views/About/About';
import Contact from '../../src/components/views/Contact/Contact';
import Testimonial from '../../src/components/views/Showcase/Testimonial';
import Work from '../../src/components/views/Showcase/Work';
import Showcase from '../../src/components/views/Showcase/Showcase';
import NavigationBar from '../../src/components/views/NavBar/NavBar';
import Footer from '../../src/components/views/Footer/Footer';
import AboutNavLink from '../../src/components/views/NavBar/AboutNavLink/AboutNavLink';
import Services from '../../src/components/views/Showcase/Service';
import Description from '../../src/components/views/Showcase/Description';

const wrapper = shallow(<AboutPage />);
wrapper.setProps({ history: {} });

describe('<AboutPage />', () => {
  it('renders the component successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div element with className wrapper', () => {
    expect(wrapper.find('div.wrapper').length).toEqual(1);
  });

  it('should have a history props', () => {
    expect(typeof wrapper.props('history')).toEqual('object');
  });

  it('should contain matching components', () => {
    expect(
      wrapper.containsMatchingElement(
        <>
          <div className="wrapper">
            <NavigationBar>
              <AboutNavLink />
            </NavigationBar>
            <Showcase>
              <Description history={{}} />
            </Showcase>
            <Services />
            <Work />
            <Testimonial />
            <Contact />
          </div>
          <Footer />
        </>,
      ),
    ).toBeTruthy();
  });
});
