import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/views/About/About';
import NotFound from './components/views/NotFound/NotFound';
import Login from './components/views/Login/LoginForm';
import SignUp from './components/views/SignUp/SignUpForm';
import PrivateRoute from './hoc/PrivateRoute';
import MealMenu from './components/views/Menu/Menu';
import UserOrdersPage from './components/views/Order/UserOrdersPage/UserOrdersPage';
import Home from './components/views/Home';
import AdminRoute from './hoc/AdminRoute';
import AdminHomePage from './components/views/Admin/AdminHome';
import AdminMenuPage from './components/views/Admin/Menu/AdminMenu';

export default () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/menu" component={MealMenu} />
        <PrivateRoute exact path="/orders" component={UserOrdersPage} />
        <PrivateRoute exact path="/" component={Home} />
        <AdminRoute exact path="/admin" component={AdminHomePage} />
        <AdminRoute exact path="/adm/menu" component={AdminMenuPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
