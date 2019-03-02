import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthHelper from '../helpers/AuthHelper';

/* istanbul ignore next */
const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) &&
      AuthHelper.checkUserIsAdmin(localStorage.userAuthToken) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export default AdminRoute;
