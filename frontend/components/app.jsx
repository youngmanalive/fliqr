import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashWelcome from './splash/splash_welcome';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <SessionModalContainer />
    <NavBarContainer />

    <Switch>
      <ProtectedRoute path='/home' component={Home} />
      <AuthRoute path="/" component={SplashWelcome} />
    </Switch>
  </div>
);

export default App;
