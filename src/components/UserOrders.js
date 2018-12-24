import React from 'react';
import CustomerNavLink from './CustomerNavLink';
import NavBar from './NavBar';
import Footer from './Footer';

const UserOrders = () => (
  <>
    <div className="wrapper">
      <NavBar>
        <CustomerNavLink />
      </NavBar>
    </div>
    <Footer />
  </>
);
export default UserOrders;
