import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/views/About/About';
import NotFound from './components/views/NotFound/NotFound';

export default () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
