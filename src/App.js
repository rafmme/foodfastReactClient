import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/views/About/About';
import NotFound from './components/views/NotFound/NotFound';
import Login from './components/views/Login/LoginForm';
import SignUp from './components/views/SignUp/SignUpForm';

export default () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
