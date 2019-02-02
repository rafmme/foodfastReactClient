import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/views/About/About';

export default () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </>
  </BrowserRouter>
);
