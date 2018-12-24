import React from 'react';
import NavBar from './NavBar';
import AdminNavLink from './AdminNavLink';
import Footer from './Footer';

const AdminMenu = () => (
  <>
    <div className="wrapper">
      <NavBar>
        <AdminNavLink />
      </NavBar>
    </div>
    <Footer />
  </>
);

export default AdminMenu;
