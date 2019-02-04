import React from 'react';
import Contact from '../Contact/Contact';
import Testimonial from '../Showcase/Testimonial';
import Work from '../Showcase/Work';
import Showcase from '../Showcase/Showcase';
import NavigationBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import AboutNavLink from '../NavBar/AboutNavLink/AboutNavLink';
import Services from '../Showcase/Service';
import Description from '../Showcase/Description';

export default ({ history }) => (
  <>
    <div className="wrapper">
      <NavigationBar>
        <AboutNavLink />
      </NavigationBar>
      <Showcase>
        <Description history={history} />
      </Showcase>
      <Services />
      <Work />
      <Testimonial />
      <Contact />
    </div>
    <Footer />
  </>
);
