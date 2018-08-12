import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashWelcomeContainer from './splash/splash_welcome_container';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path='/' component={SessionModalContainer} />
    <NavBarContainer />

    <Switch>
      <ProtectedRoute path='/home' component={Home} />
      <AuthRoute path="/" component={SplashWelcomeContainer} />
    </Switch>
  </div>
);

export default App;
