import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthHelper from '../helpers/AuthHelper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/about' }} />
      )
    }
  />
);

export default PrivateRoute;
