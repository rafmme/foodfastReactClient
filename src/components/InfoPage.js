import React from 'react';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Work from './Work';
import Showcase from './Showcase';
import NavBar from './NavBar';
import Footer from './Footer';
import InfoNavLink from './InfoNavLink';
import Services from './Services';
import Description from './Description';

export default ({ history }) => (
  <>
    <div className="wrapper">
      <NavBar>
        <InfoNavLink />
      </NavBar>
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
