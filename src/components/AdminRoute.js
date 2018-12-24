import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../utils/Auth';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.checkUserIsAuthenticated() && Auth.checkUserIsAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
);

export default AdminRoute;
