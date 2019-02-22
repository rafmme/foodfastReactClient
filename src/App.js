import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/views/About/About';
import NotFound from './components/views/NotFound/NotFound';
import Login from './components/views/Login/LoginForm';
import SignUp from './components/views/SignUp/SignUpForm';
import PrivateRoute from './hoc/PrivateRoute';
import MealMenu from './components/views/Menu/Menu';

export default () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/" component={MealMenu} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
