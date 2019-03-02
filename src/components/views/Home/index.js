import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthHelper from '../../../helpers/AuthHelper';

/* istanbul ignore next */
const Home = () => {
  if (AuthHelper.checkUserIsAdmin(localStorage.userAuthToken)) {
    return <Redirect to="/admin" />;
  }
  return <Redirect to="/menu" />;
};

export default Home;
