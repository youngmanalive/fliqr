import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashWelcome from './splash/splash_welcome';
import Test from './test';

const App = () => (
  <div>
    <SessionModalContainer />
    <NavBarContainer />

    <Switch>
      <Route path='/test' component={Test} />
      <Route path="/" component={SplashWelcome} />
    </Switch>
  </div>
);

export default App;
