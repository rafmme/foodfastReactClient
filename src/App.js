import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import InfoPage from './components/InfoPage';
import AdminHome from './components/AdminHome';
import Menu from './components/Menu';
import UserOrders from './components/UserOrders';
import AdminMenu from './components/AdminMenu';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

export default () => (
  <BrowserRouter>
    <>
      <Switch>
        <PrivateRoute exact path="/menu" component={Menu} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/orders" component={UserOrders} />
        <Route exact path="/infopage" component={InfoPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <AdminRoute exact path="/admin" component={AdminHome} />
        <AdminRoute exact path="/adm/menu" component={AdminMenu} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
